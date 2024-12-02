import React from "react";
import { useMediaQuery } from "react-responsive";
import { isDesktopQuery } from "../../../utils/mediaQueries";
import { SecondaryBaseBox } from "../../../atoms/BaseBox";
import { TextWithAccent } from "../../../atoms/Text";

const MotivationText = () => {
  const isDesktop = useMediaQuery(isDesktopQuery);

  return isDesktop ? (
    <SecondaryBaseBox $fDirection="row" $gap="8px">
      <img src={"/images/books.png"} alt={"Books"} width={40} height={40} />
      <TextWithAccent $textAlign="left">
        "Books are <span>windows</span> to the world, and reading is a journey
        into the unknown."
      </TextWithAccent>
    </SecondaryBaseBox>
  ) : (
    <></>
  );
};

export default MotivationText;
