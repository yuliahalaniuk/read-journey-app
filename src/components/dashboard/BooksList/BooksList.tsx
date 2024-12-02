import React, { ReactNode, useMemo } from "react";
import { BookEntity } from "../../../types/books";
import { FlexBox, FlexLi } from "../../../atoms/Flex";
import BookCard from "../Card/BookCard";
import TabPlaceholder from "../../../atoms/components/TabPlaceholder";
import styled from "styled-components";
import { SizeTypeEnum } from "../../../types/global";

const BooksList = ({
  placeholderText,
  onSelect,
  deleteAction,
  CustomUl,
  books,
}: {
  placeholderText?: ReactNode;
  onSelect?: (book?: BookEntity) => void;
  deleteAction?: (bookId?: string) => void;
  CustomUl?: any;
  books?: BookEntity[];
}) => {
  const renderList = useMemo(() => {
    if (CustomUl) {
      return (
        <CustomUl>
          {books?.map((book) => {
            return (
              <FlexLi key={book?.id} $justify="center">
                <BookCard
                  book={book}
                  onSelect={onSelect}
                  deleteAction={deleteAction}
                />
              </FlexLi>
            );
          })}
        </CustomUl>
      );
    }
    return (
      <GridBox>
        {books?.map((book) => {
          return (
            <FlexLi key={book.id} $justify="center">
              <BookCard
                book={book}
                onSelect={onSelect}
                deleteAction={deleteAction}
              />
            </FlexLi>
          );
        })}
      </GridBox>
    );
  }, [CustomUl, books, deleteAction, onSelect]);

  return !!books?.length ? (
    renderList
  ) : (
    <FlexBox
      style={{ width: "100%", height: "100%" }}
      $justify="center"
      $align="center"
    >
      <TabPlaceholder
        circleSizeType={SizeTypeEnum.M}
        size={50}
        imgSrc={"/images/books.png"}
        text={placeholderText ? placeholderText : <>Nothing found</>}
      />
    </FlexBox>
  );
};

export const GridBox = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  width: 100%;
  overflow: hidden;
`;

export default BooksList;
