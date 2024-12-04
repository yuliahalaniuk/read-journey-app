import { useEffect, useRef, useState } from "react";
import MainLayout from "../components/layout/MainLayout/MainLayout";
import { useLocation } from "react-router-dom";
import { PageFormData } from "../data/formFieldsInfo";
import { useAppDispatch } from "../redux/store";
import {
  addReadingSessionThunk,
  getOneThunk,
} from "../redux/library/library.thunks";
import { useLibrarySelector } from "../redux/selectors";
import DiaryContent from "../components/diary/content/DiaryContent";
import DiarySideBar from "../components/diary/sidebar/DiarySideBar";
import { removeCurrentBook } from "../redux/library/library.slice";
import { useModal } from "../providers/ModalProvider";
import BookReadModal from "../components/modals/BookReadModal";

const DiaryPage = () => {
  const location = useLocation();
  const path = location.pathname.split("/");
  const bookId = path[path.length - 1];
  const { showModal } = useModal();
  const dispatch = useAppDispatch();
  const { currentBook } = useLibrarySelector();
  const [isStarted, setIsStarted] = useState(false);
  const startRef = useRef<{
    page?: number;
    time?: number;
  }>({});

  useEffect(() => {
    dispatch(getOneThunk({ args: { bookId } }));
    return () => {
      dispatch(removeCurrentBook());
    };
  }, [dispatch, bookId]);

  const handlePageFormSubmit = (data: PageFormData) => {
    const pagesRead = (data?.page || 0) - (startRef.current.page || 0);
    setIsStarted(false);

    dispatch(
      addReadingSessionThunk({
        args: {
          bookId,
          pagesRead,
          startTime: startRef.current.time || 0,
        },
      })
    );

    if (data?.page === currentBook.info?.volumeInfo?.pageCount) {
      showModal(<BookReadModal />);
    }
  };

  const handlePageFormStart = () => {
    setIsStarted(true);
    startRef.current = {
      page: currentBook?.totalRead,
      time: Date.now(),
    };
  };

  return (
    <MainLayout>
      <DiarySideBar
        handlePageFormStart={handlePageFormStart}
        handleSubmit={handlePageFormSubmit}
        isStarted={isStarted}
      />

      <DiaryContent
        handlePageFormSubmit={handlePageFormSubmit}
        handlePageFormStart={handlePageFormStart}
        isStarted={isStarted}
      />
    </MainLayout>
  );
};



export default DiaryPage;
