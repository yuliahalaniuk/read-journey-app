import { BaseBox } from "../../atoms/BaseBox";
import { FlexBox } from "../../atoms/Flex";
import { MainTitle } from "../../atoms/Text";
import SelectSt from "../../atoms/components/Select";
import BooksList from "../books/list/BooksList";
import { useNavigate } from "react-router-dom";
import { useAuthSelector, useLibrarySelector } from "../../redux/selectors";
import { useModal } from "../../providers/ModalProvider";
import { BookEntity } from "../../types/books";
import { libraryFilterOptions } from "../../data/libraryFilterOptions";
import BookModal from "../modals/BookModal";
import { deleteOneThunk } from "../../redux/library/library.thunks";
import { useAppDispatch } from "../../redux/store";
import { SelectOptionEntity } from "../../types/global";

const LibraryContent = ({
  selectedOption,
  handleChangeOption,
}: {
  selectedOption: SelectOptionEntity | null;
  handleChangeOption: (o: SelectOptionEntity | null) => void;
}) => {
  const nav = useNavigate();
  const dispatch = useAppDispatch();
  const { user } = useAuthSelector();
  const { books } = useLibrarySelector();
  const { showModal, hideModal } = useModal();

  const handleBookSelect = (book?: BookEntity) => {
    showModal(
      <BookModal
        {...book}
        btnText="Start Reading"
        btnOnClick={() => {
          nav(`/diary/${book?.id}`);
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
    <BaseBox>
      <FlexBox
        $gap="40px"
        $fDirection="row"
        $justify="space-between"
        style={{ width: " 100%" }}
        $align="flex-start"
      >
        <MainTitle>My library</MainTitle>

        <SelectSt
          options={libraryFilterOptions}
          value={selectedOption}
          onChange={handleChangeOption}
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
  );
};

export default LibraryContent;
