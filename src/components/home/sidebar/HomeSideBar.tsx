import { SecondaryBaseBox } from "../../../atoms/BaseBox";
import { FlexUl } from "../../../atoms/FlexBox";
import { instructionsData } from "../../../data/instructionsData";
import FilterForm from "../../forms/FilterForm";
import InstructionItem from "./InstructionsItem/InstructionItem";
import { SidebarContainer } from "../../../atoms/SidebarContainer";
import LinkWithArrow from "../../../atoms/components/LinkWithArrow";
import MotivationText from "../../../atoms/components/MotivationText";
import { SecondaryTitle } from "../../../atoms/Text";

const HomeSideBar = () => {
  return (
    <SidebarContainer $gap="20px">
      <FilterForm />

      <SecondaryBaseBox $gap="20px">
        <SecondaryTitle>Start your workout</SecondaryTitle>

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

export default HomeSideBar;
