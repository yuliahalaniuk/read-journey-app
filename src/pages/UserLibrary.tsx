import LibrarySideBar from "../components/sidebars/LibrarySideBar";
import MainLayout from "../components/layout/MainLayout/MainLayout";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../redux/store";
import { getAllThunk } from "../redux/library/library.thunks";
import { getRecommendedThunk } from "../redux/books/books.thunks";
import LibraryContent from "../components/library/LibraryContent";
import { SelectOptionEntity } from "../types/global";
import { libraryFilterOptions } from "../data/libraryFilterOptions";

const UserLibrary = () => {
  const dispatch = useAppDispatch();
  const [selectedOption, setSelectedOption] =
    useState<SelectOptionEntity | null>(libraryFilterOptions[0]);

  const handleChangeOption = (option: SelectOptionEntity | null) => {
    if (option) {
      setSelectedOption(option);
    }
  };

  useEffect(() => {
    dispatch(getAllThunk());
    dispatch(getRecommendedThunk({}));
  }, [dispatch]);

  return (
    <MainLayout>
      <LibrarySideBar />

      <LibraryContent
        selectedOption={selectedOption}
        handleChangeOption={handleChangeOption}
      />
    </MainLayout>
  );
};

export default UserLibrary;
