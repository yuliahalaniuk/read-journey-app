import { ReactNode } from "react";
import { FlexBox } from "../../../atoms/FlexBox";
import { SideBarTitle } from "../../../atoms/SideBarTitle";
import { BaseButton } from "../../../atoms/Buttons";
import HourGlassIcon from "../../../assets/HourGlassIcon";
import PieChartIcon from "../../../assets/PieChartIcon";
import { DiaryTabsEnum } from "../../../types/global";
import { useTheme } from "styled-components";

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
  const theme = useTheme();

  return (
    <FlexBox $gap="20px" style={{ width: "100%" }}>
      <FlexBox
        $fDirection="row"
        $justify="space-between"
        $fillWidth
        $minWidth={"313px"}
      >
        <SideBarTitle>{title}</SideBarTitle>

        <FlexBox $fDirection="row" $flex={1} $justify="flex-end" $gap="8px">
          {[
            { Icon: HourGlassIcon, value: DiaryTabsEnum.Diary },
            { Icon: PieChartIcon, value: DiaryTabsEnum.Statistics },
          ].map(({ Icon, value }) => {
            return (
              <BaseButton
                key={value}
                $padding={"0px"}
                onClick={() => {
                  if (tab !== value) handleChangeTab?.(value);
                }}
              >
                <Icon
                  color={tab === value ? theme.text.main : theme.text.secondary}
                />
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
