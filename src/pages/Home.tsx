import HomeSideBar from "../components/dashboard/SideBar/HomeSideBar";
import { BaseBox } from "../atoms/BaseBox";
import MainLayout from "../components/layout/MainLayout/MainLayout";
import { MainTitle } from "../atoms/Text";

import BooksList from "../components/dashboard/BooksList/BooksList";
import { BookEntity } from "../types/books";

const Home = () => {
  const handleBookSelect = (book?: BookEntity) => {
    return "";
  };

  return (
    <MainLayout>
      <HomeSideBar />

      <BaseBox $gap="40px">
        <MainTitle>Recommended</MainTitle>

        <BooksList onSelect={handleBookSelect} />
      </BaseBox>
    </MainLayout>
  );
};

export default Home;
