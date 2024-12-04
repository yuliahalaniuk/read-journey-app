import { FlexBox } from "../../atoms/FlexBox";
import { TransparentBtn } from "../../atoms/Buttons";
import { BookEntity } from "../../types/books";
import { NameText, PagesText, SubText } from "./base/Modals.styled";

const BookModal = ({
  volumeInfo,
  btnOnClick,
  btnText = "Submit",
}: {
  btnOnClick?: () => void;
  btnText?: string;
} & (BookEntity | undefined)) => {
  const { title, authors, pageCount, imageLinks } = volumeInfo || {};
  return (
    <>
      <FlexBox $margin="18px" $align="center">
        <img
          src={
            imageLinks?.thumbnail
              ? imageLinks?.thumbnail
              : "/images/bookCover.png"
          }
          alt={title}
          width={140}
          height={213}
        />
      </FlexBox>

      <FlexBox style={{ margin: "20px" }}>
        <NameText>{title}</NameText>
        {authors?.map((x) => (
          <SubText>{x}</SubText>
        ))}
        <PagesText>{pageCount} pages</PagesText>
      </FlexBox>

      <TransparentBtn onClick={btnOnClick}>{btnText}</TransparentBtn>
    </>
  );
};

export default BookModal;
