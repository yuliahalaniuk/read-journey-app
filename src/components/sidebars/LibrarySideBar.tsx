import styled from "styled-components";
import { SecondaryBaseBox } from "../../atoms/BaseBox";
import { FlexBox } from "../../atoms/Flex";
import { SidebarContainer } from "../../atoms/SidebarContainer";
import { useBooksSelector } from "../../redux/selectors";
import BookCard from "../books/card/BookCard";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import AddBookForm from "../forms/AddBookForm";
import { useAppDispatch } from "../../redux/store";
import { addOneThunk } from "../../redux/library/library.thunks";
import { nanoid } from "@reduxjs/toolkit";
import LinkWithArrow from "../../atoms/components/LinkWithArrow";
import BookModal from "../modals/BookModal";
import { useModal } from "../../providers/ModalProvider";
import { BookEntity } from "../../types/books";
import AddedBookModal from "../modals/AddedBookModal";
import SLiderArrows from "../../assets/SliderArrows";
import MotivationText from "./components/MotivationText";
import { AddBookFormData } from "../../data/formFieldsInfo";
import { CardSize } from "../../types/global";

const LibrarySideBar = () => {
  const { recommended } = useBooksSelector();
  const [sliderKey, setSliderKey] = useState<number>(0);
  const dispatch = useAppDispatch();
  const { showModal } = useModal();

  const handleAddBookFormSubmit = (data: AddBookFormData) => {
    dispatch(
      addOneThunk({
        book: {
          id: nanoid(9),
          volumeInfo: {
            title: data.title,
            pageCount: data.pages,
            ...(data.author && { authors: [data.author] }),
          },
        },
      })
    );

    showModal(<AddedBookModal />);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // centerMode: true,

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
          dispatch(addOneThunk({ book }));
          showModal(<AddedBookModal />);
        }}
      />,
      { bodySize: "m" }
    );
  };

  // Force re-render on mount
  useEffect(() => {
    setSliderKey((prevKey: number) => prevKey + 1);
  }, [recommended]);

  return (
    <SidebarContainer $gap="20px" $justify="space-between">
      <AddBookForm onValid={handleAddBookFormSubmit} />

      <SecondaryBaseBox $gap="20px">
        <Title>Popular now</Title>

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

const SliderContainer = styled(FlexBox)`
  max-width: 240px;
  margin: 0 auto;

  @media screen and (min-width: 400px) {
    max-width: 290px;
  }

  @media screen and (min-width: 768px) {
    max-width: 320px;
  }

  @media screen and (min-width: 1280px) {
    width: 273px;
  }
`;
const ArrowButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  width: 20px;
  height: 20px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  /* transition: all 0.3s; */

  &:before {
    display: none;
  }

  .slick-next {
    right: 0;
  }

  .slick-prev {
    left: 0;
  }
`;

const NextArrow = (props: any) => {
  const { onClick, style } = props;
  return (
    <ArrowButton
      className="slick-next"
      onClick={onClick}
      style={{ ...style, right: "-16px" }}
    >
      <SLiderArrows.Right />
    </ArrowButton>
  );
};

const PrevArrow = (props: any) => {
  const { onClick, style } = props;
  return (
    <ArrowButton
      className="slick-prev"
      onClick={onClick}
      style={{ ...style, left: "-16px" }}
    >
      <SLiderArrows.Left />
    </ArrowButton>
  );
};

const StyledSlider = styled(Slider)`
  .slick-track {
    display: flex;
    /* gap: 16px; */
  }
`;

const Title = styled.p`
  width: 100%;
  font-weight: 700;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: -0.02em;
  text-align: left;

  color: ${(p) => p.theme.text.main};
`;

export default LibrarySideBar;
