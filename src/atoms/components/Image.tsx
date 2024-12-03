import React, { useState } from "react";
import { FlexBox } from "../Flex";
// import { CircleLoaderSpiner } from "./GlobalSpinner";

const Image = ({ src, alt }: { src?: string; alt?: string }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <FlexBox style={{ position: "relative", width: "100%" }}>
      {!imageLoaded && <FlexBox>{/* <CircleLoaderSpiner /> */}</FlexBox>}
      <img
        alt={alt || "Book Thumbnail"}
        src={src || "/images/bookCover.png"}
        onLoad={handleImageLoad}
        style={{
          display: imageLoaded ? "block" : "none",
          visibility: imageLoaded ? "visible" : "hidden",
        }}
      />
    </FlexBox>
  );
};

export default Image;
