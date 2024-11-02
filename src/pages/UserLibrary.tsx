import LibrarySideBar from "../components/dashboard/SideBar/LibrarySideBar";
import { BaseBox } from "../atoms/BaseBox";
import { MainTitle } from "../atoms/Text";
import { FlexBox } from "../atoms/Flex";
import SelectSt from "../atoms/components/Select";
import MainLayout from "../components/layout/MainLayout/MainLayout";
import BooksList from "../components/dashboard/BooksList/BooksList";
import { useLibrary, userId } from "../providers/LibraryProvider";
import { FilterFormData } from "../data/formFieldsInfo";
import { useEffect, useState } from "react";
import { SelectOptionEntity } from "../types/global";
import { libraryFilterOptions } from "../data/libraryFilterOptions";
import { BaseButton } from "../atoms/Buttons";
import { useModal } from "../providers/ModalProvider";
import BookModal from "../components/modals/BookModal";
import { useNavigate } from "react-router-dom";
import { database } from "../firebase/firebase";
import { onValue, ref } from "firebase/database";

const UserLibrary = () => {
  const [selectedOption, setSelectedOption] =
    useState<SelectOptionEntity | null>(libraryFilterOptions[0]);

  const { filteredBooks, deleteBook, deleteAllBooks, filterBooks } =
    useLibrary();
  const { showModal, hideModal } = useModal();

  const nav = useNavigate();

  const handleFilterFormSubmit = (data: FilterFormData) => {
    console.log(data);
  };

  const handleChange = (option: SelectOptionEntity | null) => {
    if (option) {
      setSelectedOption(option);
      filterBooks(option.value);
    }
  };

  useEffect(() => {
    // if (user) {
    const userBooksRef = ref(database, `users/${userId}/stats`);

    onValue(userBooksRef, (snapshot) => {
      const data = snapshot.val();
      console.log("stats", data);
    });
    // }
  }, []);

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
              deleteAllBooks();
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
          books={filteredBooks}
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
          deleteAction={deleteBook}
        />
      </BaseBox>
    </MainLayout>
  );
};

export default UserLibrary;
