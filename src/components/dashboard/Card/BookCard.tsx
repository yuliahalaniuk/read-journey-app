import styled from "styled-components";
import { FlexBox } from "../../../atoms/Flex";
import DeleteBtn from "../../../atoms/DeleteBtn";
import { BookEntity } from "../../../types/books";

// ToDo button

const BookCard = ({
  book,
  deleteAction,
  onSelect,
}: {
  deleteAction?: (bookId?: number) => void;
  onSelect?: (book: BookEntity) => void;
  book: BookEntity;
}) => {
  const { cover_image, title, author } = book;
  return (
    <FlexBox
      style={{ flexShrink: 0, overflow: "hidden" }}
      onClick={() => {
        onSelect?.(book);
      }}
    >
      <img alt="hr" src={cover_image} width={71} height={107} />

      <FlexBox $fDirection="row">
        <FlexBox>
          <NameText>{title}</NameText>
          <SubText>{author}</SubText>
        </FlexBox>

        {deleteAction && (
          <DeleteBtn
            onClick={() => {
              deleteAction(book.id);
            }}
          />
        )}
      </FlexBox>
    </FlexBox>
  );
};

const NameText = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.text.main};
  margin-bottom: 2px;
  text-align: left;

  text-overflow: ellipsis;
  white-space: nowrap;
`;

const SubText = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 117%;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.text.secondary};
  text-align: left;

  margin-bottom: 4px;

  text-overflow: ellipsis;
  white-space: nowrap;
`;
export default BookCard;
