import React from "react";
import { Text, TextWithAccent } from "../../../../atoms/Text";
import { SecondaryBaseBox } from "../../../../atoms/BaseBox";
import { FlexBox } from "../../../../atoms/Flex";
import DoughnutGraph from "../../../grahps/DoughnutGraph";

const StatisticsTab = ({
  totalRead,
  readPerc,
  doughnutData,
}: {
  totalRead?: number;
  readPerc?: any;
  doughnutData?: any;
}) => {
  return (
    <>
      <TextWithAccent $textAlign="left">
        Each page, each chapter is a new round of knowledge, a new step towards
        understanding. By rewriting statistics, we create our own reading
        history.
      </TextWithAccent>

      <SecondaryBaseBox $gap="20px" style={{ width: "100%" }}>
        <DoughnutGraph data={doughnutData} />

        <FlexBox
          $fDirection="row"
          $gap="16px"
          $justify="flex-start"
          $align="flex-start"
          style={{ maxWidth: "max-content" }}
        >
          <div
            style={{
              width: "14px",
              height: "14px",
              backgroundColor: "#30B94D",
              borderRadius: "4px",
              flexShrink: 0,
              marginTop: "2px",
            }}
          ></div>

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
