import { SectionBox } from "../../../atoms/BaseBox";
import { MainTitle } from "../../../atoms/Text";
import { useBooksSelector } from "../../../redux/selectors";
import { useModal } from "../../../providers/ModalProvider";
import { BookEntity } from "../../../types/books";
import BookModal from "../../modals/BookModal";
import { addOneThunk } from "../../../redux/library/library.thunks";
import AddedBookModal from "../../modals/AddedBookModal";
import { useAppDispatch } from "../../../redux/store";
import BooksList from "../../books/list/BooksList";
import { FlexBox } from "../../../atoms/FlexBox";
import Pagination from "../../../atoms/components/Pagination";
import { BaseSpinner } from "../../../atoms/components/Spinners";

const HomeContent = ({
  handlePreviousPage,
  handleNextPage,
  offset,
}: {
  handlePreviousPage?: () => void;
  handleNextPage?: () => void;
  offset?: number;
}) => {
  const { books, loading, hasMore } = useBooksSelector();
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
          dispatch(
            addOneThunk({
              args: { book },
              onSuccess: () => {
                showModal(<AddedBookModal />);
              },
            })
          );
        }}
      />,
      { bodySize: "m" }
    );
  };

  return (
    <SectionBox>
      <FlexBox $fDirection="row" $justify="space-between" $align="flex-start">
        <MainTitle>Popular</MainTitle>
        <Pagination
          onPrevClick={handlePreviousPage}
          onNextClick={handleNextPage}
          isPrev={offset === 0}
          isNext={!hasMore}
        />
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
        />
      )}
    </SectionBox>
  );
};

export default HomeContent;
