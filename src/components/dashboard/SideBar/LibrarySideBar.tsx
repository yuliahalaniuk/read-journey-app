import styled from "styled-components";
import { SecondaryBaseBox } from "../../../atoms/BaseBox";
import { FlexBox } from "../../../atoms/Flex";
import { SidebarContainer } from "../../../atoms/SidebarContainer";
import { useBooksSelector } from "../../../redux/selectors";
import BookCard, { CardSize } from "../Card/BookCard";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import AddBookForm from "../../forms/AddBookForm";
import { useAppDispatch } from "../../../redux/store";
import { addOneThunk } from "../../../redux/library/library.thunks";
import { nanoid } from "@reduxjs/toolkit";
import LinkWithArrow from "../../../atoms/components/LinkWithArrow";
import BookModal from "../../modals/BookModal";
import { useModal } from "../../../providers/ModalProvider";
import { BookEntity } from "../../../types/books";
import AddedBookModal from "../../modals/AddedBookModal";

const LibrarySideBar = () => {
  const { recommended } = useBooksSelector();
  const [sliderKey, setSliderKey] = useState<number>(0);
  const dispatch = useAppDispatch();
  const { showModal } = useModal();
  const handleAddBookFormSubmit = (data: any) => {
    console.log("data", data);

    dispatch(
      addOneThunk({
        book: {
          id: nanoid(9),
          volumeInfo: {
            title: data.title,
            pageCount: data.pages,
            authors: [data.author],
          },
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
    <SidebarContainer $gap="20px">
      <AddBookForm onValid={handleAddBookFormSubmit} />
      <SliderContainer $gap="20px">
        <Title>Recommended</Title>

        <FlexBox $align="stretch">
          {recommended && recommended.length > 0 ? (
            <StyledSlider key={sliderKey} {...settings}>
              {recommended.map((book) => (
                <FlexBox key={book.id} $justify="center">
                  <BookCard
                    book={book}
                    size={CardSize.Small}
                    onSelect={handleBookSelect}
                  />
                </FlexBox>
              ))}
            </StyledSlider>
          ) : (
            <p>No recommendations available</p>
          )}
        </FlexBox>

        <LinkWithArrow text="Home" href="/home" />
      </SliderContainer>
    </SidebarContainer>
  );
};

const SliderContainer = styled(SecondaryBaseBox)`
  max-width: 335px;

  @media screen and (min-width: 768px) {
    max-width: 320px;
  }

  @media screen and (min-width: 1280px) {
    width: 313px;
  }
`;
const ArrowButton = styled.button`
  /* display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  border: none;
  background-color: transparent;
  color: red;
  z-index: 100;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: ${(p) => p.theme.primary};
    color: red;
  }

  &:before {
    content: "";
    display: block;
    font-size: 20px;
    font-weight: bold;
    width: 40px;
    height: 40px;
    color: ${(p) => p.theme.text.main};
  }

  &.slick-prev {

    &:before {
      content: "<";
    }
  }

  &.slick-next {

    &:before {
      content: ">";
    }
  } */
`;

const NextArrow = (props: any) => {
  const { onClick, style } = props;
  return (
    <ArrowButton
      className="slick-next"
      onClick={onClick}
      style={{
        ...style,
        display: "block",
        width: "40px",
        height: "40px",
        color: "red",
      }}
    >{`>`}</ArrowButton>
  );
};

const PrevArrow = (props: any) => {
  const { onClick, style } = props;
  return (
    <ArrowButton
      className="slick-prev"
      onClick={onClick}
      style={{
        ...style,
        display: "block",
        width: "40px",
        height: "40px",
        color: "red",
      }}
    >{`<`}</ArrowButton>
  );
};

const StyledSlider = styled(Slider)`
  .slick-track {
    display: flex;
    gap: 16px;
  }
`;

const Title = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: -0.02em;
  text-align: center;

  color: ${(p) => p.theme.text.main};
`;

export default LibrarySideBar;

