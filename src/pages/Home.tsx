import HomeSideBar from "../components/dashboard/SideBar/HomeSideBar";
import { BaseBox } from "../atoms/BaseBox";
import MainLayout from "../components/layout/MainLayout/MainLayout";
import { MainTitle } from "../atoms/Text";

import BooksList from "../components/dashboard/BooksList/BooksList";
import { BookEntity } from "../types/books";
import { useModal } from "../providers/ModalProvider";
import BookModal from "../components/modals/BookModal";
import { useLibrary } from "../providers/LibraryProvider";
import { useEffect, useState } from "react";

const Home = () => {
  const { showModal, hideModal } = useModal();
  const { addBook } = useLibrary();

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

  const handleBookSelect = (book?: BookEntity) => {
    if (!book) {
      throw new Error("Book is not passed");
    }

    showModal(
      <BookModal
        {...book}
        btnText="Add to library"
        btnOnClick={() => {
          console.log("Added to library");
          addBook(book);
          hideModal();
        }}
        onClose={hideModal}
      />
    );
  };

  return (
    <MainLayout>
      <HomeSideBar />

      <BaseBox $gap="40px">
        <MainTitle>Recommended</MainTitle>

        <BooksList books={books} onSelect={handleBookSelect} />
      </BaseBox>
    </MainLayout>
  );
};

export default Home;
