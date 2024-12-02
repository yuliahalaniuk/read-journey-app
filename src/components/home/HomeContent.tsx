import { BaseBox } from "../../atoms/BaseBox";
import { MainTitle } from "../../atoms/Text";
import { useBooksSelector } from "../../redux/selectors";
import { useModal } from "../../providers/ModalProvider";
import { BookEntity } from "../../types/books";
import BookModal from "../modals/BookModal";
import { addOneThunk } from "../../redux/library/library.thunks";
import AddedBookModal from "../modals/AddedBookModal";
import { useAppDispatch } from "../../redux/store";
import BooksList from "../books/list/BooksList";

import Pagination from "../../atoms/components/Pagination";
import { FlexBox } from "../../atoms/Flex";

const HomeContent = ({
  handlePreviousPage,
  handleNextPage,
  offset,
}: {
  handlePreviousPage?: () => void;
  handleNextPage?: () => void;
  offset?: number;
}) => {
  const { books } = useBooksSelector();
  const { showModal } = useModal();
  const dispatch = useAppDispatch();

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
    <BaseBox>
      <MainTitle>Popular</MainTitle>

      <FlexBox style={{ flex: 1 }}>
        <BooksList
          books={books}
          placeholderText={
            <>
              To start training, add <span>some of your books</span> or from the
              recommended ones
            </>
          }
          onSelect={handleBookSelect}
        />
      </FlexBox>

      <Pagination
        onNextClick={handleNextPage}
        onPrevClick={handlePreviousPage}
        isPrev={offset === 0}
      />
    </BaseBox>
  );
};

export default HomeContent;
