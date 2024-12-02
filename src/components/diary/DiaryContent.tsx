import NotStartedIcon from "../../assets/NotStartedIcon";
import RecordStartedIcon from "../../assets/RecordStartedIcon";
import { BaseBox } from "../../atoms/BaseBox";
import { BaseButton } from "../../atoms/Buttons";
import { FlexBox } from "../../atoms/Flex";
import { MainTitle } from "../../atoms/Text";
import { useModal } from "../../providers/ModalProvider";
import { useLibrarySelector } from "../../redux/selectors";
import PageModal from "../modals/PageModal";
import { NameText, SubText } from "./DiaryContent.styled";

const DiaryContent = ({
  isStarted,
  handlePageFormStart,
  handlePageFormSubmit,
}: {
  isStarted: boolean;
  handlePageFormStart?: () => void;
  handlePageFormSubmit?: (d: any) => void;
}) => {
  const { showModal, hideModal } = useModal();
  const { currentBook } = useLibrarySelector();

  const handleClick = () => {
    if (!isStarted) {
      handlePageFormStart?.();
    } else {
      showModal(
        <PageModal
          action="stop"
          onValid={(data) => {
            handlePageFormSubmit?.(data);
            hideModal();
          }}
          maxPages={currentBook?.info?.volumeInfo?.pageCount}
          minPages={currentBook?.totalRead || 0}
        />
      );
    }
  };

  return (
    <BaseBox $padding={"40px"}>
      <MainTitle>My reading</MainTitle>

      <FlexBox $justify="center" $align="center" style={{ flex: 1 }}>
        <FlexBox>
          <img
            src={
              currentBook?.info?.volumeInfo?.imageLinks?.thumbnail
                ? currentBook?.info?.volumeInfo.imageLinks?.thumbnail
                : "/images/bookCover.png"
            }
            alt={currentBook?.info?.volumeInfo?.title}
            width={140}
            height={213}
          />
        </FlexBox>

        <FlexBox style={{ margin: "20px" }}>
          <NameText>{currentBook?.info?.volumeInfo?.title}</NameText>
          {currentBook?.info?.volumeInfo?.authors?.map((x: string) => (
            <SubText>{x}</SubText>
          ))}
        </FlexBox>

        <BaseButton onClick={handleClick}>
          {isStarted ? <RecordStartedIcon /> : <NotStartedIcon />}
        </BaseButton>
      </FlexBox>
    </BaseBox>
  );
};

export default DiaryContent;
