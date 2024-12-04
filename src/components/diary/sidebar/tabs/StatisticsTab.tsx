import React from "react";
import { Text, TextWithAccent } from "../../../../atoms/Text";
import { SecondaryBaseBox } from "../../../../atoms/BaseBox";
import { FlexBox } from "../../../../atoms/FlexBox";
import DoughnutGraph from "../../../grahps/DoughnutGraph";
import { GraphIndicator } from "./Tabs.styled";
import { ChartData } from "chart.js";

const StatisticsTab = ({
  totalRead,
  readPerc,
  doughnutData,
}: {
  totalRead?: number;
  readPerc?: string;
  doughnutData: ChartData<"doughnut">;
}) => {
  return (
    <>
      <TextWithAccent>
        Each page, each chapter is a new round of knowledge, a new step towards
        understanding. By rewriting statistics, we create our own reading
        history.
      </TextWithAccent>

      <SecondaryBaseBox $gap="20px" $fillWidth $align="center">
        <DoughnutGraph data={doughnutData} />

        <FlexBox
          $fDirection="row"
          $gap="16px"
          $justify="flex-start"
          $align="flex-start"
          $maxWidth="max-content"
        >
          <GraphIndicator />
          <FlexBox $gap="8px" $align="flex-start">
            <Text $primary $textAlign="left" $size="20px">
              {readPerc}%
            </Text>
            <Text $textAlign="left">{(totalRead || 0) + " "}pages read</Text>
          </FlexBox>
        </FlexBox>
      </SecondaryBaseBox>
    </>
  );
};

export default StatisticsTab;
