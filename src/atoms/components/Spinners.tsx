import { CircleLoaderSpinner } from "../CircleLoaderSpinner";
import { FlexBox } from "../FlexBox";
import { Text } from "../Text";

export const GlobalSpinner = () => {
  return (
    <FlexBox
      $gap={"20px"}
      $align="center"
      $justify="center"
      style={{ width: "100vw", height: "100vh" }}
    >
      <CircleLoaderSpinner />

      <Text $size={"24px"}>Loading...</Text>
    </FlexBox>
  );
};

export const BaseSpinner = () => {
  return (
    <FlexBox
      $gap={"20px"}
      $align="center"
      $justify="center"
      style={{ width: "100%", height: "100%" }}
    >
      <CircleLoaderSpinner $size={40} />

      <Text $size={"24px"}>Loading...</Text>
    </FlexBox>
  );
};
