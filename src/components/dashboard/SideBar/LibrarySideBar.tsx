import styled from "styled-components";
import { SecondaryBaseBox } from "../../../atoms/BaseBox";
import { FlexBox } from "../../../atoms/Flex";
import FilterForm from "../../forms/FilterForm";
import { BaseLink } from "../../../atoms/BaseLink";

// import { useMediaQuery } from "react-responsive";
// import { isTabletQuery } from "../../../utils/mediaQueries";
import { SidebarContainer } from "../../../atoms/SidebarContainer";
import BooksList from "../BooksList/BooksList";
import { BookEntity } from "../../../types/books";
import { useEffect, useState } from "react";
import { FilterFormData } from "../../../data/formFieldsInfo";

const LibrarySideBar = ({
  handleFilterFormSubmit,
}: {
  handleFilterFormSubmit?: (data: FilterFormData) => void;
}) => {
  const [books, setBooks] = useState<BookEntity[]>([]);

  useEffect(() => {
    // const controller = new AbortController();
    const fetchData = async () => {
      try {
        const response = await fetch("https://freetestapi.com/api/v1/books", {
          // signal: controller.signal,
        });
        const data = await response.json();
        // console.log("data", data);
        setBooks(data);
      } catch (e: { name: string } | any) {
        if (e.name !== "AbortError") {
          console.error("Error", e);
        }
      }
    };

    fetchData();
    // return () => controller.abort();
  }, []);

  return (
    <SidebarContainer $gap="20px">
      <FlexBox className="FormContainer">
        <FilterForm onSubmit={handleFilterFormSubmit} />
      </FlexBox>

      <SecondaryBaseBox $gap="20px">
        <Title>Recommended</Title>

        <BooksList CustomUl={FlexCont} books={books} />

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
