import { ReactNode } from "react";
import { FlexBox } from "../../../../atoms/Flex";
import { SideBarTitle } from "../../../../atoms/SideBarTitle";
import { BaseButton } from "../../../../atoms/Buttons";
import HourGlassIcon from "../../../../assets/HourGlassIcon";
import PieChartIcon from "../../../../assets/PieChartIcon";
import { DiaryTabsEnum } from "../DiarySideBar";

const Layout = ({
  children,
  title,
  handleChangeTab,
  tab,
}: {
  children?: ReactNode;
  title?: string;
  handleChangeTab?: (tab: DiaryTabsEnum) => void;
  tab?: DiaryTabsEnum;
}) => {
  return (
    <FlexBox $gap="20px" style={{ width: "100%" }}>
      <FlexBox
        $fDirection="row"
        $justify="space-between"
        style={{
          width: "100%",
        }}
      >
        <SideBarTitle>{title}</SideBarTitle>

        <FlexBox
          $fDirection="row"
          style={{ flex: 1 }}
          $justify="flex-end"
          $gap="8px"
        >
          {[
            { Icon: HourGlassIcon, value: DiaryTabsEnum.Diary },
            { Icon: PieChartIcon, value: DiaryTabsEnum.Statistics },
          ].map(({ Icon, value }) => {
            return (
              <BaseButton
                key={value}
                style={{
                  padding: 0,
                }}
                onClick={() => {
                  if (tab !== value) handleChangeTab?.(value);
                }}
              >
                <Icon color={tab === value ? "#ffffff" : "#686868"} />
              </BaseButton>
            );
          })}
        </FlexBox>
      </FlexBox>

      {children}
    </FlexBox>
  );
};

export default Layout;
