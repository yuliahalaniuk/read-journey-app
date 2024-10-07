import React, { useEffect, useState } from "react";
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

const DiaryPage = () => {
  const location = useLocation();
  const path = location.pathname.split("/");
  const bookId = path[path.length - 1];
  console.log("bookId", bookId);
  const [book, setBook] = useState<BookEntity>();
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    // const controller = new AbortController();
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://freetestapi.com/api/v1/books/${bookId}`,
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

  return (
    <MainLayout>
      <DiarySideBar />

      <BaseBox>
        <FlexBox>
          <FlexBox style={{ margin: "18px" }}>
            <img
              src={book?.cover_image ? book?.cover_image : "/images/iphone.png"}
              alt={book?.title}
              width={140}
              height={213}
            />
          </FlexBox>

          <FlexBox style={{ margin: "20px" }}>
            <NameText>{book?.title}</NameText>
            <SubText>{book?.author}</SubText>
          </FlexBox>

          {isStarted ? (
            <BaseButton
              onClick={() => {
                setIsStarted((p) => !p);
              }}
            >
              <RecordStartedIcon />
            </BaseButton>
          ) : (
            <BaseButton
              onClick={() => {
                setIsStarted((p) => !p);
              }}
            >
              <NotStartedIcon />
            </BaseButton>
          )}
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
