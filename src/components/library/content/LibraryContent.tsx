import { SectionBox } from "../../../atoms/BaseBox";
import { FlexBox } from "../../../atoms/FlexBox";
import { MainTitle } from "../../../atoms/Text";
import BooksList from "../../books/list/BooksList";
import { useNavigate } from "react-router-dom";
import { useAuthSelector, useLibrarySelector } from "../../../redux/selectors";
import { useModal } from "../../../providers/ModalProvider";
import { BookEntity } from "../../../types/books";
import BookModal from "../../modals/BookModal";
import { deleteOneThunk } from "../../../redux/library/library.thunks";
import { useAppDispatch } from "../../../redux/store";
import { SelectOptionEntity } from "../../../types/global";
import { BaseSpinner } from "../../../atoms/components/Spinners";

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
  const { books, loading } = useLibrarySelector();
  const { showModal, hideModal } = useModal();

  const handleBookSelect = (book?: BookEntity) => {
    showModal(
      <BookModal
        {...book}
        btnText="Start Reading"
        btnOnClick={() => {
          nav(`/library/${book?.id}`);
          hideModal();
        }}
      />,
      { bodySize: "m" }
    );
  };

  const handleDeleteBook = (id?: string) => {
    dispatch(deleteOneThunk({ args: { bookId: id, userId: user?.uid } }));
  };

  return (
    <SectionBox>
      <FlexBox
        $gap="40px"
        $fDirection="row"
        $justify="space-between"
        $align="flex-start"
        $fillWidth
      >
        <MainTitle>My library</MainTitle>

        {/* <SelectSt
          options={libraryFilterOptions}
          value={selectedOption}
          onChange={handleChangeOption}
        /> */}
      </FlexBox>

      {loading ? (
        <BaseSpinner />
      ) : (
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
      )}
    </SectionBox>
  );
};

export default LibraryContent;
