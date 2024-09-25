import styled from "styled-components";
import { BaseBox, SecondaryBaseBox } from "../../../atoms/BaseBox";
import { FlexBox, FlexUl } from "../../../atoms/Flex";
import { instructionsData } from "../../../data/instructionsData";
import FilterForm from "../../forms/FilterForm";
import InstructionItem from "./InstructionsItem/InstructionItem";
import { BaseLink } from "../../../atoms/BaseLink";

const LibrarySideBar = () => {
  return (
    <BaseBox $gap="20px">
      <FilterForm />

      <SecondaryBaseBox $gap="20px">
        <Title>Start your workout</Title>

        <FlexUl $gap="20px">
          {instructionsData?.map((instr) => {
            return <InstructionItem key={instr?.id} {...instr} />;
          })}
        </FlexUl>

        <FlexBox
          style={{
            width: "100%",
          }}
          $justify="space-between"
          $fDirection="row"
        >
          <BaseLink href="/library">My library</BaseLink>
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
