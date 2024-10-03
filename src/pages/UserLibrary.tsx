import LibrarySideBar from "../components/dashboard/SideBar/LibrarySideBar";
import { BaseBox } from "../atoms/BaseBox";
import { MainTitle } from "../atoms/Text";
import { FlexBox } from "../atoms/Flex";
import SelectSt from "../atoms/components/Select";
import MainLayout from "../components/layout/MainLayout/MainLayout";
import BooksList from "../components/dashboard/BooksList/BooksList";

const options = [
  { value: "All", label: "all" },
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const UserLibrary = () => {
  return (
    <MainLayout>
      <LibrarySideBar />

      <BaseBox $gap="40px">
        <FlexBox
          $gap="40px"
          $fDirection="row"
          $justify="space-between"
          style={{ width: " 100%" }}
        >
          <MainTitle>My library</MainTitle>

          <SelectSt options={options} />
        </FlexBox>

        <BooksList
          placeholderText={
            <>
              To start training, add <span>some of your books</span> or from the
              recommended ones
            </>
          }
        />
      </BaseBox>
    </MainLayout>
  );
};

export default UserLibrary;
