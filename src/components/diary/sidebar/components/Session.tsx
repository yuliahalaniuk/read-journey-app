import React from "react";
import { FlexBox, FlexLi } from "../../../../atoms/FlexBox";
import { Text } from "../../../../atoms/Text";
import { BaseButton } from "../../../../atoms/Buttons";
import DiaryGraph from "../../../grahps/HorisontalBar";
import DeleteBtmIcon from "../../../../assets/DeleteBtmIcon";

const DiarySession = ({
  session,
  bookPages,
  onDelete,
}: {
  session: any;
  bookPages: number;
  onDelete: () => void;
}) => {
  const time = session.duration;
  const percentage = ((session.pagesRead * 100) / bookPages).toFixed(0);
  const pagesPerHour = (session.pagesRead / (time / 3600)).toFixed(0);
  const sessionTime =
    time >= 3600
      ? `${Math.floor(time / 3600)} hours`
      : time >= 60
      ? `${Math.floor(time / 60)} minutes`
      : `${Math.floor(time)} seconds`;

  return (
    <FlexLi
      $padding={"0 0 0 20px"}
      $fDirection="row"
      $align="center "
      $justify="space-between"
    >
      <FlexBox $gap="8px" $align="flex-start">
        <Text $primary $textAlign="left" $size="20px">
          {percentage}%
        </Text>
        <Text $textAlign="left">{sessionTime}</Text>
      </FlexBox>

      <FlexBox $fDirection="row" $align="center" $gap="8px">
        <FlexBox $gap="8px">
          <DiaryGraph gData={[10, 15]} />

          <FlexBox $align="center" $gap="2px">
            <Text $size="12px">{`${pagesPerHour} pages`}</Text>
            <Text $size="12px">per hour</Text>
          </FlexBox>
        </FlexBox>
        <BaseButton onClick={onDelete}>
          <DeleteBtmIcon />
        </BaseButton>
      </FlexBox>
    </FlexLi>
  );
};

export default DiarySession;
