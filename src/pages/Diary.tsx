import React from "react";
import MainLayout from "../components/layout/MainLayout/MainLayout";
import DiarySideBar from "../components/dashboard/SideBar/DiarySideBar";
import { BaseBox } from "../atoms/BaseBox";

const DiaryPage = () => {
  return (
    <MainLayout>
      <DiarySideBar />

      <BaseBox> Hello</BaseBox>
    </MainLayout>
  );
};

export default DiaryPage;
