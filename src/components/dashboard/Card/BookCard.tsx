import styled from "styled-components";
import { FlexBox } from "../../../atoms/Flex";
import DeleteBtn from "../../../atoms/DeleteBtn";
import { BookEntity } from "../../../types/books";

export enum CardSize {
  Large = "large",
  Small = "small",
}

type BookCardProps = {
  deleteAction?: (bookId?: string) => void;
  onSelect?: (book: BookEntity) => void;
  book: BookEntity;
  size?: CardSize;
};

const BookCard = ({
  book,
  deleteAction,
  onSelect,
  size = CardSize.Large,
}: BookCardProps) => {
  const { volumeInfo, id } = book;
  const { title, authors, imageLinks } = volumeInfo || {};

  return (
    <CardWrapper
      size={size}
      onClick={(e) => {
        e.stopPropagation();
        onSelect?.(book);
      }}
    >
      <ImageContainer size={size}>
        <img
          alt="Book Thumbnail"
          src={imageLinks?.thumbnail || "/images/bookCover.png"}
        />
      </ImageContainer>

      <Content size={size}>
        <TextContainer size={size}>
          <Title size={size}>{title}</Title>
          <Author size={size}>{authors?.join(", ")}</Author>
        </TextContainer>

        {deleteAction && (
          <DeleteBtnWrapper
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.stopPropagation();
              deleteAction(id);
            }}
          />
        )}
      </Content>
    </CardWrapper>
  );
};
const CardWrapper = styled(FlexBox)<{ size: CardSize }>`
  flex-direction: column;
  width: 100%;
  max-width: ${({ size }) => (size === CardSize.Large ? "180px" : "71px")};
  height: ${({ size }) => (size === CardSize.Large ? "320px" : "140px")};
  border-radius: 8px;
  overflow: hidden;
  background-color: transparent;
  margin: 0 auto;
`;

const ImageContainer = styled.div<{ size: CardSize }>`
  width: 100%;
  height: ${({ size }) => (size === CardSize.Large ? "255px" : "107px")};
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Content = styled.div<{ size: CardSize }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: ${({ size }) => (size === CardSize.Large ? "8px" : "4px")};
  width: 100%;
  height: ${({ size }) => (size === CardSize.Large ? "65px" : "34px")};
`;

const TextContainer = styled.div<{ size: CardSize }>`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
`;

const Title = styled.p<{ size: CardSize }>`
  font-weight: 700;
  color: ${(p) => p.theme.text.main};
  font-size: ${({ size }) => (size === CardSize.Large ? "16px" : "10px")};
  margin-bottom: ${({ size }) => (size === CardSize.Large ? "4px" : "2px")};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const Author = styled.p<{ size: CardSize }>`
  font-weight: 500;
  font-size: ${({ size }) => (size === CardSize.Large ? "12px" : "10px")};
  color: ${(p) => p.theme.text.secondary};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const DeleteBtnWrapper = styled(DeleteBtn)`
  flex-shrink: 0;
  align-self: flex-start;
  margin-left: 8px;
`;

export default BookCard;
