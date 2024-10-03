import React, { ReactNode, useEffect, useMemo, useState } from "react";
import { BookEntity } from "../../../types/books";
import { FlexLi } from "../../../atoms/Flex";
import BookCard from "../Card/BookCard";
import TabPlaceholder from "../../../atoms/components/TabPlaceholder";
import styled from "styled-components";

const BooksList = ({
  placeholderText,
  onSelect,
  deleteAction,
  CustomUl,
}: {
  placeholderText?: ReactNode;
  onSelect?: (book?: BookEntity) => void;
  deleteAction?: () => void;
  CustomUl?: any;
}) => {
  const [books, setBooks] = useState<BookEntity[]>([]);

  useEffect(() => {
    // const controller = new AbortController();
    const fetchData = async () => {
      try {
        const response = await fetch("https://freetestapi.com/api/v1/books", {
          // signal: controller.signal,
        });
        const data = await response.json();
        console.log("data", data);
        setBooks(data);
      } catch (e: { name: string } | any) {
        if (e.name !== "AbortError") {
          console.error("Error", e);
        }
      }
    };

    fetchData();
    // return () => controller.abort();
  }, []);

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
            <FlexLi key={book?.id} $justify="center">
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

  return !!books.length ? (
    renderList
  ) : (
    <TabPlaceholder
      size={130}
      imgSrc={"https://picsum.photos/id/237/200/300"}
      text={placeholderText ? placeholderText : <>Nothing found</>}
    />
  );
};

const GridBox = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  width: 100%;
  overflow: hidden;
`;

export default BooksList;
