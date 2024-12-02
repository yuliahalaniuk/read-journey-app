import Image from "../../../atoms/components/Image";
import { BookEntity } from "../../../types/books";
import { CardSize } from "../../../types/global";
import {
  Author,
  CardWrapper,
  Content,
  DeleteBtnWrapper,
  ImageContainer,
  TextContainer,
  Title,
} from "./BookCard.styled";

interface BookCardProps {
  deleteAction?: (bookId?: string) => void;
  onSelect?: (book: BookEntity) => void;
  book: BookEntity;
  size?: CardSize;
}

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
        <Image alt="Book Thumbnail" src={imageLinks?.thumbnail} />
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

export default BookCard;
