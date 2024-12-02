import styled from "styled-components";
import { SecondaryBaseBox } from "../../atoms/BaseBox";
import { FlexUl } from "../../atoms/Flex";
import { instructionsData } from "../../data/instructionsData";
import FilterForm from "../forms/FilterForm";
import InstructionItem from "./components/InstructionsItem/InstructionItem";
import { SidebarContainer } from "../../atoms/SidebarContainer";
import LinkWithArrow from "../../atoms/components/LinkWithArrow";
import MotivationText from "./components/MotivationText";

const HomeSideBar = () => {
  return (
    <SidebarContainer $gap="20px">
      <FilterForm />

      <SecondaryBaseBox $gap="20px">
        <Title>Start your workout</Title>

        <FlexUl $gap="20px">
          {instructionsData?.map((instr) => {
            return <InstructionItem key={instr?.id} {...instr} />;
          })}
        </FlexUl>

        <LinkWithArrow href="/library" text="My library" />
      </SecondaryBaseBox>
      <MotivationText />
    </SidebarContainer>
  );
};

// const ArrowBox = styled.span`
//   color: ${(p) => p.theme.text.main};
// `;

const Title = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: -0.02em;
  text-align: center;

  color: ${(p) => p.theme.text.main};
`;

export default HomeSideBar;
