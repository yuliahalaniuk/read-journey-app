import NotStartedIcon from "../../../assets/NotStartedIcon";
import RecordStartedIcon from "../../../assets/RecordStartedIcon";
import { SectionBox } from "../../../atoms/BaseBox";
import { BaseButton } from "../../../atoms/Buttons";
import { BaseSpinner } from "../../../atoms/components/Spinners";
import { FlexBox } from "../../../atoms/FlexBox";
import { MainTitle } from "../../../atoms/Text";
import { PageFormData } from "../../../data/formFieldsInfo";
import { useModal } from "../../../providers/ModalProvider";
import { useLibrarySelector } from "../../../redux/selectors";
import PageModal from "../../modals/PageModal";
import { MainBookImg, NameText, SubText } from "./DiaryContent.styled";

const DiaryContent = ({
  isStarted,
  handlePageFormStart,
  handlePageFormSubmit,
}: {
  isStarted: boolean;
  handlePageFormStart?: () => void;
  handlePageFormSubmit?: (d: PageFormData) => void;
}) => {
  const { showModal, hideModal } = useModal();
  const { currentBook, loading } = useLibrarySelector();

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
    <SectionBox $padding={"40px"}>
      <MainTitle>My reading</MainTitle>

      {loading ? (
        <BaseSpinner />
      ) : (
        <FlexBox $justify="center" $align="center" $flex={1}>
          <FlexBox>
            <MainBookImg
              src={
                currentBook?.info?.volumeInfo?.imageLinks?.thumbnail
                  ? currentBook?.info?.volumeInfo.imageLinks?.thumbnail
                  : "/images/bookCover.png"
              }
              alt={currentBook?.info?.volumeInfo?.title}
              width={137}
              height={208}
            />
          </FlexBox>

          <FlexBox $margin="20px">
            <NameText>{currentBook?.info?.volumeInfo?.title}</NameText>
            {currentBook?.info?.volumeInfo?.authors?.map((x: string) => (
              <SubText>{x}</SubText>
            ))}
          </FlexBox>

          <BaseButton onClick={handleClick}>
            {isStarted ? <RecordStartedIcon /> : <NotStartedIcon />}
          </BaseButton>
        </FlexBox>
      )}
    </SectionBox>
  );
};

export default DiaryContent;
