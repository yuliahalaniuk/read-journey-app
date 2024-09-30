import styled from "styled-components";
import { BaseBox, SecondaryBaseBox } from "../../../atoms/BaseBox";
import { FlexBox, FlexUl } from "../../../atoms/Flex";
import { instructionsData } from "../../../data/instructionsData";
import FilterForm from "../../forms/FilterForm";
import InstructionItem from "./InstructionsItem/InstructionItem";
import { BaseLink } from "../../../atoms/BaseLink";
import BookCard from "../Card/BookCard";

const LibrarySideBar = () => {
  const books = [];
  return (
    <BaseBox $gap="20px">
      <FilterForm />

      <SecondaryBaseBox $gap="20px">
        <Title>Recommended</Title>

        <FlexUl $gap="20px">
          {/* {books?.map((book) => {
            return <BookCard key={book?.id} {...book} />;
          })} */}
        </FlexUl>

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
    </BaseBox>
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

export default LibrarySideBar;
