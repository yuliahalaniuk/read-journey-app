import HomeSideBar from "../components/dashboard/SideBar/HomeSideBar";
import { BaseBox } from "../atoms/BaseBox";
import MainLayout from "../components/layout/MainLayout/MainLayout";
import { MainTitle } from "../atoms/Text";

import BooksList from "../components/dashboard/BooksList/BooksList";
import { BookEntity } from "../types/books";
import { useModal } from "../providers/ModalProvider";
import BookModal from "../components/modals/BookModal";
import { useEffect } from "react";
import { useAppDispatch } from "../redux/store";
import { getAllBooksThunk } from "../redux/books/books.thunks";
import { useBooksSelector } from "../redux/selectors";
import { addOneThunk } from "../redux/library/library.thunks";

const Home = () => {
  const { showModal, hideModal } = useModal();
  // const { addBook } = useLibrary();
  const dispatch = useAppDispatch();
  const { books } = useBooksSelector();

  useEffect(() => {
    dispatch(getAllBooksThunk());
  }, [dispatch]);

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
          // addBook(book);
          dispatch(addOneThunk({ book }));
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
