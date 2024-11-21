import { FlexBox } from "../../atoms/Flex";
import styled from "styled-components";
import { TransparentBtn } from "../../atoms/Buttons";
import { BookEntity } from "../../types/books";

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
      <FlexBox style={{ margin: "18px" }}>
        <img
          src={
            imageLinks?.thumbnail ? imageLinks?.thumbnail : "/images/iphone.png"
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

const NameText = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.text.main};
  margin-bottom: 2px;
  text-align: center;
`;

const SubText = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 117%;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.text.secondary};
  text-align: center;

  margin-bottom: 4px;
`;

const PagesText = styled.p`
  font-weight: 500;
  font-size: 10px;
  line-height: 120%;
  letter-spacing: -0.02em;
  text-align: center;
  color: ${(p) => p.theme.text.main};
  text-align: center;
`;

export default BookModal;
