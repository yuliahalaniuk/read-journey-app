import { useEffect, useRef, useState } from "react";
import MainLayout from "../components/layout/MainLayout/MainLayout";
import DiarySideBar from "../components/dashboard/SideBar/DiarySideBar";
import { BaseBox } from "../atoms/BaseBox";
import { useLocation } from "react-router-dom";
import { FlexBox } from "../atoms/Flex";
import { BookEntity } from "../types/books";
import styled from "styled-components";
import RecordStartedIcon from "../assets/RecordStartedIcon";
import NotStartedIcon from "../assets/NotStartedIcon";
import { BaseButton } from "../atoms/Buttons";
import { PageFormData } from "../data/formFieldsInfo";
import { get, push, ref, set } from "firebase/database";
import { database } from "../firebase/firebase";
import { userId } from "../providers/LibraryProvider";
import { useModal } from "../providers/ModalProvider";
import PageModal from "../components/modals/PageModal";

// export const updateFirebaseReadingData = async (
//   bookId: string,
//   pagesRead: number,
//   startTime: number
// ) => {
//   const currentDate = new Date().toISOString().split("T")[0];

//   const readingRef = ref(
//     database,
//     `users/${userId}/stats/${bookId}/${currentDate}`
//   );

//   const newSession = {
//     pagesRead,
//     startTime,
//     endTime: Date.now(),
//   };

//   console.log("added ", newSession);
//   await push(readingRef, newSession);
// };

export const updateFirebaseReadingData = async ({
  userId,
  bookId,
  pagesRead,
  startTime,
}: {
  userId: string;
  bookId: string;
  pagesRead: number;
  startTime: number;
}) => {
  const currentDate = new Date().toISOString().split("T")[0];
  const readingRef = ref(database, `users/${userId}/stats/${bookId}`);
  const sessionDuration = Math.floor((Date.now() - startTime) / 1000); // Duration in seconds

  // New session data
  const newSession = {
    pagesRead,
    startTime,
    endTime: Date.now(),
    duration: sessionDuration,
  };

  // Retrieve the existing book data
  const snapshot = await get(readingRef);
  const bookData = snapshot.exists()
    ? snapshot.val()
    : { totalRead: 0, sessions: {} };

  // Update totalRead and add the new session
  const updatedTotalRead = bookData.totalRead + pagesRead;
  const updatedSessions = {
    ...bookData.sessions,
    [currentDate]: {
      ...(bookData.sessions[currentDate] || {}),
      [push(ref(database)).key as any]: newSession,
    },
  };

  // Update Firebase with the new data
  await set(readingRef, {
    totalRead: updatedTotalRead,
    sessions: updatedSessions,
  });

  console.log("Updated book data:", {
    totalRead: updatedTotalRead,
    sessions: updatedSessions,
  });
};

const DiaryPage = () => {
  const location = useLocation();
  const path = location.pathname.split("/");
  const bookId = path[path.length - 1];
  const { showModal, hideModal } = useModal();

  console.log("bookId", bookId);
  const [book, setBook] = useState<BookEntity>({});
  const [isStarted, setIsStarted] = useState(false);
  const startRef = useRef<{
    page?: number;
    time?: number;
  }>({});

  useEffect(() => {
    // const controller = new AbortController();
    const fetchData = async () => {
      try {
        const response = await fetch(
          // `https://freetestapi.com/api/v1/books/${bookId}`,
          `https://www.googleapis.com/books/v1/volumes/${bookId}`,
          {
            // signal: controller.signal,
          }
        );
        const data = await response.json();
        console.log("data", data);
        setBook(data);
      } catch (e: { name: string } | any) {
        if (e.name !== "AbortError") {
          console.error("Error", e);
        }
      }
    };

    fetchData();
  }, [bookId]);

  const handlePageFormSubmit = (data: PageFormData) => {
    if (!isStarted) {
      setIsStarted(true);
      startRef.current = { page: data.page, time: Date.now() };
    } else {
      const pagesRead = (data?.page || 0) - (startRef.current.page || 0);
      setIsStarted(false);

      updateFirebaseReadingData({
        bookId,
        pagesRead,
        startTime: startRef.current.time || 0,
        userId,
      });
    }
  };

  useEffect(() => {
    console.log("startRef", startRef.current);
  }, [startRef]);

  return (
    <MainLayout>
      <DiarySideBar
        handleSubmit={handlePageFormSubmit}
        isStarted={isStarted}
        book={book}
      />

      <BaseBox>
        <FlexBox>
          <FlexBox style={{ margin: "18px" }}>
            <img
              src={
                book?.volumeInfo?.imageLinks?.thumbnail
                  ? book?.volumeInfo.imageLinks?.thumbnail
                  : "/images/iphone.png"
              }
              alt={book?.volumeInfo?.title}
              width={140}
              height={213}
            />
          </FlexBox>

          <FlexBox style={{ margin: "20px" }}>
            <NameText>{book?.volumeInfo?.title}</NameText>
            {book?.volumeInfo?.authors?.map((x) => (
              <SubText>{x}</SubText>
            ))}
          </FlexBox>

          <BaseButton
            onClick={() => {
              if (!isStarted) {
                setIsStarted(true);
              } else {
                showModal(
                  <PageModal
                    action="stop"
                    onValid={(data) => handlePageFormSubmit(data)}
                    onClose={hideModal}
                  />
                );
              }
            }}
          >
            {isStarted ? <RecordStartedIcon /> : <NotStartedIcon />}
          </BaseButton>
        </FlexBox>
      </BaseBox>
    </MainLayout>
  );
};

const NameText = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.text.main};
  margin-bottom: 2px;
  text-align: center;
`;

const SubText = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 117%;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.text.secondary};
  text-align: center;

  margin-bottom: 4px;
`;

export default DiaryPage;
