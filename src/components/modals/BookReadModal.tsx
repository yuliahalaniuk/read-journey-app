import React from "react";
import SmallModal from "./base/SmallModal";

const BookReadModal = () => {
  return (
    <SmallModal
      imgSrc="/images/books.png"
      text={
        <>
          It was an <span>exciting journey</span>, where each page revealed new
          horizons, and the characters became inseparable friends.
        </>
      }
      title={"The book is read"}
    />
  );
};

export default BookReadModal;
