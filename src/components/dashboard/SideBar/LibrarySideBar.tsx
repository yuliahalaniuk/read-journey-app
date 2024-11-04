import styled from "styled-components";
import { SecondaryBaseBox } from "../../../atoms/BaseBox";
import { FlexBox, FlexLi } from "../../../atoms/Flex";
import FilterForm from "../../forms/FilterForm";
import { BaseLink } from "../../../atoms/BaseLink";
import { SidebarContainer } from "../../../atoms/SidebarContainer";
import { FilterFormData } from "../../../data/formFieldsInfo";
import { useBooksSelector } from "../../../redux/selectors";
import BookCard from "../Card/BookCard";
import Slider from "react-slick";
import BooksList from "../BooksList/BooksList";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LibrarySideBar = ({
  handleFilterFormSubmit,
}: {
  handleFilterFormSubmit?: (data: FilterFormData) => void;
}) => {
  const { recommended } = useBooksSelector();
  const [sliderKey, setSliderKey] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  // Force re-render on mount
  useEffect(() => {
    setSliderKey((prevKey: any) => prevKey + 1);
  }, [recommended]);
  return (
    <SidebarContainer $gap="20px">
      <FlexBox className="FormContainer">
        <FilterForm onSubmit={handleFilterFormSubmit} />
      </FlexBox>

      <SecondaryBaseBox $gap="20px">
        <Title>Recommended</Title>

        <BooksList CustomUl={FlexCont} books={recommended} />

        <FlexBox
          style={{
            minHeight: "300px",
            maxHeight: "310px",
            maxWidth: "400px",
            zIndex: 200,
          }}
          className="slider-container"
        >
          <StyledSlider key={sliderKey} {...settings}>
            {recommended?.map((book) => {
              return (
                <FlexBox key={book.id} $justify="center">
                  <BookCard
                    book={book}
                    // onSelect={onSelect}
                    // deleteAction={deleteAction}
                  />
                </FlexBox>
              );
            })}
          </StyledSlider>
        </FlexBox>

        <FlexBox
          style={{
            width: "100%",
          }}
          $justify="space-between"
          $fDirection="row"
        >
          <BaseLink href="/library">Home</BaseLink>
          <ArrowBox>{`->`}</ArrowBox>
        </FlexBox>
      </SecondaryBaseBox>
    </SidebarContainer>
  );
};

const StyledSlider = styled(Slider)`
  .slick-slider {
    position: relative;
    display: block;
    box-sizing: border-box;
    user-select: none;
    touch-action: pan-y;
  }

  .slick-list {
    overflow: hidden;
    margin: 0;
    padding: 0;
    max-width: 100%;
  }

  .slick-track {
    display: flex;
  }

  .slick-slide {
    display: block;
    height: auto;
  }

  /* Customize dots, arrows, etc., as needed */
`;

const ArrowBox = styled.span`
  color: ${(p) => p.theme.text.main};
`;

const Title = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: -0.02em;
  text-align: center;

  color: ${(p) => p.theme.text.main};
`;

const FlexCont = styled.div`
  /* display: grid; */
  /* grid-template-rows: ; */
  /* grid-template-columns: repeat(3, 1fr); */
  display: flex;
  flex-direction: row;
  align-items: stretch;
  /* flex-wrap: nowrap; */
  overflow: auto;
  gap: 16px;
  width: 100%;
`;

export default LibrarySideBar;
