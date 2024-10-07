import { FlexBox } from "../../../atoms/Flex";
import { SidebarContainer } from "../../../atoms/SidebarContainer";
import { SideBarTitle } from "../../../atoms/SideBarTitle";
import PageForm from "../../forms/PageForm";
import { PageFormData } from "../../../data/formFieldsInfo";
import { TextWithAccent } from "../../../atoms/Text";
import { CircleImgWrapper } from "../../../atoms/CircleImgWrapper";
import { SizeTypeEnum } from "../../../types/global";
import { SecondaryBaseBox } from "../../../atoms/BaseBox";
import PieChartIcon from "../../../assets/PieChartIcon";
import HourGlassIcon from "../../../assets/HourGlassIcon";
import { BaseButton } from "../../../atoms/Buttons";
import { useMemo, useState } from "react";

enum DiaryTabsEnum {
  Progress = "progress",
  Diary = "diary",
  Statistics = "statistics",
}

const DiarySideBar = () => {
  const handleSubmit = (data: PageFormData) => {
    console.log(data);
  };
  const [tab, setTab] = useState<DiaryTabsEnum>(DiaryTabsEnum.Statistics);

  const renderTab = useMemo(() => {
    if (tab === DiaryTabsEnum.Progress) {
      return (
        <FlexBox
          $gap="20px"
          $align="flex-start"
          style={{ padding: "0 0 84px" }}
        >
          <SideBarTitle>Progress</SideBarTitle>

          <TextWithAccent $textAlign="left" style={{ marginBottom: "50px" }}>
            Here you will see when and how much you read. To record, click on
            the red button above.
          </TextWithAccent>

          <FlexBox>
            <CircleImgWrapper $type={SizeTypeEnum.S}>
              <img
                src={"/images/star.png"}
                alt={"Star"}
                width={50}
                height={70}
              />
            </CircleImgWrapper>
          </FlexBox>
        </FlexBox>
      );
    }

    if (tab === DiaryTabsEnum.Diary) {
      return (
        <FlexBox $gap="20px">
          <FlexBox
            $fDirection="row"
            $justify="space-between"
            style={{
              width: "100%",
            }}
          >
            <SideBarTitle>Diary</SideBarTitle>

            <FlexBox
              $fDirection="row"
              style={{ flex: 1 }}
              $justify="flex-end"
              $gap="8px"
            >
              <BaseButton style={{ padding: 0 }}>
                <HourGlassIcon />
              </BaseButton>
              <BaseButton
                style={{ padding: 0 }}
                onClick={() => {
                  setTab(DiaryTabsEnum.Statistics);
                }}
              >
                <PieChartIcon />
              </BaseButton>
            </FlexBox>
          </FlexBox>
          <SecondaryBaseBox $gap="20px"></SecondaryBaseBox>
        </FlexBox>
      );
    }

    if (tab === DiaryTabsEnum.Statistics) {
      return (
        <FlexBox $gap="20px">
          <FlexBox
            $fDirection="row"
            $justify="space-between"
            style={{
              width: "100%",
            }}
          >
            <SideBarTitle>Statistics</SideBarTitle>

            <FlexBox
              $fDirection="row"
              style={{ flex: 1 }}
              $justify="flex-end"
              $gap="8px"
            >
              <BaseButton
                style={{ padding: 0 }}
                onClick={() => {
                  setTab(DiaryTabsEnum.Diary);
                }}
              >
                <HourGlassIcon />
              </BaseButton>
              <BaseButton style={{ padding: 0 }}>
                <PieChartIcon />
              </BaseButton>
            </FlexBox>
          </FlexBox>

          <TextWithAccent $textAlign="left">
            Each page, each chapter is a new round of knowledge, a new step
            towards understanding. By rewriting statistics, we create our own
            reading history.
          </TextWithAccent>
          <SecondaryBaseBox $gap="20px"></SecondaryBaseBox>
        </FlexBox>
      );
    }
  }, [tab]);

  return (
    <SidebarContainer $gap="20px">
      <FlexBox className="FormContainer">
        <PageForm onValid={handleSubmit} action={"start"} />
      </FlexBox>

      {renderTab}
    </SidebarContainer>
  );
};

export default DiarySideBar;
