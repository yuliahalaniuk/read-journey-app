import { SecondaryBaseBox } from "../../../atoms/BaseBox";
import { FlexBox } from "../../../atoms/FlexBox";
import { SidebarContainer } from "../../../atoms/SidebarContainer";
import { useBooksSelector } from "../../../redux/selectors";
import BookCard from "../../books/card/BookCard";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AddBookForm from "../../forms/AddBookForm";
import { useAppDispatch } from "../../../redux/store";
import { addOneThunk } from "../../../redux/library/library.thunks";
import { nanoid } from "@reduxjs/toolkit";
import LinkWithArrow from "../../../atoms/components/LinkWithArrow";
import BookModal from "../../modals/BookModal";
import { useModal } from "../../../providers/ModalProvider";
import { BookEntity } from "../../../types/books";
import AddedBookModal from "../../modals/AddedBookModal";
import MotivationText from "../../../atoms/components/MotivationText";
import { AddBookFormData } from "../../../data/formFieldsInfo";
import { CardSize } from "../../../types/global";
import { SliderContainer, StyledSlider } from "./LibrarySideBar.styled";
import { NextArrow, PrevArrow } from "./SliderArrows";
import { SecondaryTitle } from "../../../atoms/Text";

const LibrarySideBar = () => {
  const { recommended } = useBooksSelector();
  const [sliderKey, setSliderKey] = useState<number>(0);
  const dispatch = useAppDispatch();
  const { showModal } = useModal();

  const handleAddBookFormSubmit = (data: AddBookFormData) => {
    const updatedBook = {
      id: nanoid(9),
      volumeInfo: {
        title: data.title,
        pageCount: data.pages,
        ...(data.author && { authors: [data.author] }),
      },
    };

    dispatch(
      addOneThunk({
        args: {
          book: updatedBook,
        },
        onSuccess: () => {
          showModal(<AddedBookModal />);
        },
      })
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const handleBookSelect = (book?: BookEntity) => {
    if (!book) {
      throw new Error("Book is not passed");
    }

    showModal(
      <BookModal
        {...book}
        btnText="Add to library"
        btnOnClick={() => {
          dispatch(
            addOneThunk({
              args: { book },
              onSuccess: () => {
                showModal(<AddedBookModal />);
              },
            })
          );
        }}
      />,
      { bodySize: "m" }
    );
  };

  useEffect(() => {
    setSliderKey((prevKey: number) => prevKey + 1);
  }, [recommended]);

  return (
    <SidebarContainer $gap="20px" $justify="space-between">
      <AddBookForm onValid={handleAddBookFormSubmit} />

      <SecondaryBaseBox $gap="20px">
        <SecondaryTitle>Popular now</SecondaryTitle>

        <SliderContainer className="SliderCont">
          <FlexBox $align="stretch">
            {recommended && recommended.length > 0 ? (
              <StyledSlider key={sliderKey} {...settings}>
                {recommended.map((book) => (
                  <BookCard
                    key={book.id}
                    book={book}
                    size={CardSize.Small}
                    onSelect={handleBookSelect}
                  />
                ))}
              </StyledSlider>
            ) : (
              <p>No recommendations available</p>
            )}
          </FlexBox>
        </SliderContainer>

        <LinkWithArrow text="Home" href="/home" />
      </SecondaryBaseBox>
      <MotivationText />
    </SidebarContainer>
  );
};

export default LibrarySideBar;
