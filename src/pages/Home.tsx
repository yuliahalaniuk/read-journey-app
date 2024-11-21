import HomeSideBar from "../components/dashboard/SideBar/HomeSideBar";
import { BaseBox } from "../atoms/BaseBox";
import MainLayout from "../components/layout/MainLayout/MainLayout";
import { MainTitle } from "../atoms/Text";
import { GridBox } from "../components/dashboard/BooksList/BooksList";
import { BookEntity } from "../types/books";
import { useModal } from "../providers/ModalProvider";
import BookModal from "../components/modals/BookModal";
import { useEffect } from "react";
import { useAppDispatch } from "../redux/store";
import { getAllBooksThunk } from "../redux/books/books.thunks";
import { useBooksSelector } from "../redux/selectors";
import { addOneThunk } from "../redux/library/library.thunks";
import BookCard from "../components/dashboard/Card/BookCard";
import { FlexLi } from "../atoms/Flex";
import { useLocation } from "react-router-dom";
import AddedBookModal from "../components/modals/AddedBookModal";

const Home = () => {
  const { showModal } = useModal();
  const dispatch = useAppDispatch();
  const { books } = useBooksSelector();
  const { search } = useLocation();

  useEffect(() => {
    const q = search.substring(1);
    dispatch(getAllBooksThunk({ query: q }));
  }, [dispatch, search]);

  const handleBookSelect = (book?: BookEntity) => {
    if (!book) {
      throw new Error("Book is not passed");
    }

    showModal(
      <BookModal
        {...book}
        btnText="Add to library"
        btnOnClick={() => {
          dispatch(addOneThunk({ book })); // onSuccess
          showModal(<AddedBookModal />);
        }}
      />,
      { bodySize: "m" }
    );
  };

  return (
    <MainLayout>
      <HomeSideBar />

      <BaseBox $gap="40px">
        <MainTitle>Recommended</MainTitle>

        <GridBox>
          {books?.map((book) => {
            return (
              <FlexLi key={book.id} $justify="center">
                <BookCard book={book} onSelect={handleBookSelect} />
              </FlexLi>
            );
          })}
        </GridBox>
      </BaseBox>
    </MainLayout>
  );
};

export default Home;
