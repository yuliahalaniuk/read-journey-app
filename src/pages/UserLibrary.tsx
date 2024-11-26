import LibrarySideBar from "../components/sidebars/LibrarySideBar";
import { BaseBox } from "../atoms/BaseBox";
import { MainTitle } from "../atoms/Text";
import { FlexBox } from "../atoms/Flex";
import SelectSt from "../atoms/components/Select";
import MainLayout from "../components/layout/MainLayout/MainLayout";
import BooksList from "../components/dashboard/BooksList/BooksList";
import { useEffect, useState } from "react";
import { SelectOptionEntity } from "../types/global";
import { libraryFilterOptions } from "../data/libraryFilterOptions";
import { useModal } from "../providers/ModalProvider";
import BookModal from "../components/modals/BookModal";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../redux/store";
import { deleteOneThunk, getAllThunk } from "../redux/library/library.thunks";
import { useAuthSelector, useLibrarySelector } from "../redux/selectors";
import { getRecommendedThunk } from "../redux/books/books.thunks";
import { BookEntity } from "../types/books";

const UserLibrary = () => {
  const dispatch = useAppDispatch();
  const nav = useNavigate();

  const { user } = useAuthSelector();
  const { books } = useLibrarySelector();
  const { showModal, hideModal } = useModal();
  const [selectedOption, setSelectedOption] =
    useState<SelectOptionEntity | null>(libraryFilterOptions[0]);

  useEffect(() => {
    dispatch(getAllThunk());
    dispatch(getRecommendedThunk());
  }, [dispatch]);

  const handleChange = (option: SelectOptionEntity | null) => {
    if (option) {
      setSelectedOption(option);
      // filterBooks(option.value);
    }
  };

  const handleBookSelect = (book?: BookEntity) => {
    showModal(
      <BookModal
        {...book}
        btnText="Start Reading"
        btnOnClick={() => {
          nav(`/diary/${book?.id}`);
          // addBook(book);

          hideModal();
        }}
      />,
      { bodySize: "m" }
    );
  };

  const handleDeleteBook = (id?: string) => {
    dispatch(deleteOneThunk({ bookId: id, userId: user?.uid }));
  };

  return (
    <MainLayout>
      <LibrarySideBar />

      <BaseBox>
        <FlexBox
          $gap="40px"
          $fDirection="row"
          $justify="space-between"
          style={{ width: " 100%" }}
        >
          <MainTitle>My library</MainTitle>

          <SelectSt
            options={libraryFilterOptions}
            value={selectedOption}
            onChange={handleChange}
          />
        </FlexBox>

        <BooksList
          books={books}
          placeholderText={
            <>
              To start training, add <span>some of your books</span> or from the
              recommended ones
            </>
          }
          onSelect={handleBookSelect}
          deleteAction={handleDeleteBook}
        />
      </BaseBox>
    </MainLayout>
  );
};

export default UserLibrary;
