import React from "react";
import Header from "../components/layout/Header/Header";
import { Container } from "../atoms/PageContainer";
import LibrarySideBar from "../components/dashboard/SideBar/LibrarySideBar";
import { BaseBox, SecondaryBaseBox } from "../atoms/BaseBox";
import { MainTitle } from "../atoms/Text";
import BookCard from "../components/dashboard/Card/BookCard";
import { FlexBox, FlexUl } from "../atoms/Flex";
import TabPlaceholder from "../atoms/components/TabPlaceholder";
import SelectSt from "../atoms/components/Select";

const UserLibrary = () => {
  const books = [];

  return (
    <Container>
      <Header />

      <LibrarySideBar />

      <BaseBox $gap="40px">
        <FlexBox $gap="40px" style={{ width: " 100%" }}>
          <MainTitle>My library</MainTitle>
        </FlexBox>

        {!!books.length ? (
          <FlexUl $gap="20px">
            {/* {books?.map((book) => {
              return <BookCard key={book?.id} {...book} />;
            })} */}
          </FlexUl>
        ) : (
          <TabPlaceholder
            size={130}
            imgSrc={"https://picsum.photos/id/237/200/300"}
            text={
              <>
                To start training, add <span>some of your books</span> or from
                the recommended ones
              </>
            }
          />
        )}

        <FlexBox style={{ padding: "16px", width: "100%" }}>
          <SelectSt />
        </FlexBox>
      </BaseBox>
    </Container>
  );
};

export default UserLibrary;
