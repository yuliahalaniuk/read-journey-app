import { useEffect, useRef, useState } from "react";
import MainLayout from "../components/layout/MainLayout/MainLayout";
import DiarySideBar from "../components/dashboard/SideBar/DiarySideBar";
import { BaseBox } from "../atoms/BaseBox";
import { useLocation } from "react-router-dom";
import { FlexBox } from "../atoms/Flex";

import styled from "styled-components";
import RecordStartedIcon from "../assets/RecordStartedIcon";
import NotStartedIcon from "../assets/NotStartedIcon";
import { BaseButton } from "../atoms/Buttons";
import { PageFormData } from "../data/formFieldsInfo";

import { useModal } from "../providers/ModalProvider";
import PageModal from "../components/modals/PageModal";
import { useAppDispatch } from "../redux/store";
import {
  addReadingSessionThunk,
  getOneThunk,
} from "../redux/library/library.thunks";
import { useLibrarySelector } from "../redux/selectors";
import { ContentContainer } from "../atoms/PageContainer";
import { MainTitle } from "../atoms/Text";

const DiaryPage = () => {
  const location = useLocation();
  const path = location.pathname.split("/");
  const bookId = path[path.length - 1];
  const { showModal, hideModal } = useModal();
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
      startRef.current = { page: data.page, time: Date.now() };
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

  // useEffect(() => {
  //   console.log("startRef", startRef.current);
  // }, [startRef]);

  return (
    <MainLayout>
      <DiarySideBar
        handleSubmit={handlePageFormSubmit}
        isStarted={isStarted}
        book={currentBook}
      />

      <BaseBox $padding={"40px"}>
        <MainTitle>My reading</MainTitle>

        <FlexBox>
          <FlexBox>
            <img
              src={
                currentBook?.volumeInfo?.imageLinks?.thumbnail
                  ? currentBook?.volumeInfo.imageLinks?.thumbnail
                  : "/images/bookCover.png"
              }
              alt={currentBook?.volumeInfo?.title}
              width={140}
              height={213}
            />
          </FlexBox>

          <FlexBox style={{ margin: "20px" }}>
            <NameText>{currentBook?.volumeInfo?.title}</NameText>
            {currentBook?.volumeInfo?.authors?.map((x: string) => (
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
                    onValid={(data) => {
                      handlePageFormSubmit(data);
                      hideModal();
                    }}
                    maxPages={currentBook.volumeInfo.pageCount}
                    minPages={0}
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
