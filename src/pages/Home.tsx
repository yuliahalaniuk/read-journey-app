import HomeSideBar from "../components/sidebars/HomeSideBar";
import MainLayout from "../components/layout/MainLayout/MainLayout";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../redux/store";
import { getAllBooksThunk } from "../redux/books/books.thunks";
import { useLocation } from "react-router-dom";
import HomeContent from "../components/home/HomeContent";
import { useBooksSelector } from "../redux/selectors";
import GlobalSpinner from "../atoms/components/GlobalSpinner";

const Home = () => {
  const dispatch = useAppDispatch();
  const { search } = useLocation();
  const { loading } = useBooksSelector();

  const [offset, setOffset] = useState(0);
  const maxResults = 10;

  useEffect(() => {
    const q = search.substring(1);
    dispatch(getAllBooksThunk({ query: q, offset, maxResults }));
  }, [dispatch, search, offset]);

  const handleNextPage = () => {
    setOffset((prev) => prev + maxResults);
  };

  const handlePreviousPage = () => {
    setOffset((prev) => Math.max(0, prev - maxResults));
  };

  return loading ? (
    <GlobalSpinner />
  ) : (
    <MainLayout>
      <HomeSideBar />

      <HomeContent
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
        offset={offset}
      />
    </MainLayout>
  );
};

export default Home;
