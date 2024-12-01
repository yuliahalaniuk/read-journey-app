import { useEffect, useRef, useState } from "react";
import MainLayout from "../components/layout/MainLayout/MainLayout";
import DiarySideBar from "../components/sidebars/DiarySideBar";
import { useLocation } from "react-router-dom";
import { PageFormData } from "../data/formFieldsInfo";
import { useAppDispatch } from "../redux/store";
import {
  addReadingSessionThunk,
  getOneThunk,
} from "../redux/library/library.thunks";
import { useLibrarySelector } from "../redux/selectors";
import DiaryContent from "../components/diary/DiaryContent";

const DiaryPage = () => {
  const location = useLocation();
  const path = location.pathname.split("/");
  const bookId = path[path.length - 1];

  const dispatch = useAppDispatch();
  const { currentBook } = useLibrarySelector();
  const [isStarted, setIsStarted] = useState(false);
  const startRef = useRef<{
    page?: number;
    time?: number;
  }>({});

  useEffect(() => {
    dispatch(getOneThunk({ bookId }));
  }, [dispatch, bookId]);

  const handlePageFormSubmit = (data: PageFormData) => {
    if (!isStarted) {
      setIsStarted(true);
      startRef.current = { page: currentBook?.totalRead, time: Date.now() };
    } else {
      const pagesRead = (data?.page || 0) - (startRef.current.page || 0);

      setIsStarted(false);

      dispatch(
        addReadingSessionThunk({
          bookId,
          pagesRead,
          startTime: startRef.current.time || 0,
        })
      );
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
