import React from "react";
import { SecondaryBaseBox } from "../../../atoms/BaseBox";
import { FlexBox } from "../../../atoms/Flex";
import { SidebarContainer } from "../../../atoms/SidebarContainer";
import { SideBarTitle } from "../../../atoms/SideBarTitle";
import PageForm from "../../forms/PageForm";
import { PageFormData } from "../../../data/formFieldsInfo";
import { TextWithAccent } from "../../../atoms/Text";
import { CircleImgWrapper } from "../../../atoms/CircleImgWrapper";

const DiarySideBar = () => {
  const handleSubmit = (data: PageFormData) => {
    console.log(data);
  };

  return (
    <SidebarContainer $gap="20px">
      <FlexBox className="FormContainer">
        <PageForm onValid={handleSubmit} action={"start"} />
      </FlexBox>

      <FlexBox $gap="20px" $align="flex-start" style={{ padding: "0 0 84px" }}>
        <SideBarTitle>Progress</SideBarTitle>

        <TextWithAccent $textAlign="left" style={{ marginBottom: "50px" }}>
          Here you will see when and how much you read. To record, click on the
          red button above.
        </TextWithAccent>

        <FlexBox>
          <CircleImgWrapper $size={"100px"}>
            <img src={"/images/star.png"} alt={"Star"} width={50} height={70} />
          </CircleImgWrapper>
        </FlexBox>
      </FlexBox>

      {/* <SecondaryBaseBox $gap="20px">
        <SideBarTitle>Diary</SideBarTitle>
      </SecondaryBaseBox>

      <SecondaryBaseBox $gap="20px">
        <SideBarTitle>Statistics</SideBarTitle>
      </SecondaryBaseBox> */}
    </SidebarContainer>
  );
};

export default DiarySideBar;
