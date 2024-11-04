import LibrarySideBar from "../components/dashboard/SideBar/LibrarySideBar";
import { BaseBox } from "../atoms/BaseBox";
import { MainTitle } from "../atoms/Text";
import { FlexBox } from "../atoms/Flex";
import SelectSt from "../atoms/components/Select";
import MainLayout from "../components/layout/MainLayout/MainLayout";
import BooksList from "../components/dashboard/BooksList/BooksList";
import { FilterFormData } from "../data/formFieldsInfo";
import { useEffect, useState } from "react";
import { SelectOptionEntity } from "../types/global";
import { libraryFilterOptions } from "../data/libraryFilterOptions";
import { BaseButton } from "../atoms/Buttons";
import { useModal } from "../providers/ModalProvider";
import BookModal from "../components/modals/BookModal";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../redux/store";
import {
  deleteAllThunk,
  deleteOneThunk,
  getAllThunk,
} from "../redux/library/library.thunks";
import { useAuthSelector, useLibrarySelector } from "../redux/selectors";
import { getRecommendedThunk } from "../redux/books/books.thunks";

const UserLibrary = () => {
  const [selectedOption, setSelectedOption] =
    useState<SelectOptionEntity | null>(libraryFilterOptions[0]);
  const dispatch = useAppDispatch();
  const { user } = useAuthSelector();
  const { books } = useLibrarySelector();
  const { showModal, hideModal } = useModal();

  const nav = useNavigate();

  const handleFilterFormSubmit = (data: FilterFormData) => {
    console.log(data);
  };

  const handleChange = (option: SelectOptionEntity | null) => {
    if (option) {
      setSelectedOption(option);
      // filterBooks(option.value);
    }
  };
  useEffect(() => {
    dispatch(getAllThunk());
    dispatch(getRecommendedThunk());
  }, [dispatch]);

  return (
    <MainLayout>
      <LibrarySideBar handleFilterFormSubmit={handleFilterFormSubmit} />

      <BaseBox $gap="40px">
        <FlexBox
          $gap="40px"
          $fDirection="row"
          $justify="space-between"
          style={{ width: " 100%" }}
        >
          <MainTitle>My library</MainTitle>

          <BaseButton
            style={{
              border: "1px solid red",
              color: "red",
            }}
            onClick={() => {
              dispatch(deleteAllThunk({}));
            }}
          >
            Delete All
          </BaseButton>

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
          onSelect={(book) => {
            showModal(
              <BookModal
                {...book}
                btnText="Start Reading"
                btnOnClick={() => {
                  console.log("Reading started");
                  nav(`/diary/${book?.id}`);
                  // addBook(book);

                  hideModal();
                }}
                onClose={hideModal}
              />
            );
          }}
          deleteAction={(id) => {
            dispatch(deleteOneThunk({ bookId: id, userId: user?.uid }));
          }}
        />
      </BaseBox>
    </MainLayout>
  );
};

export default UserLibrary;
