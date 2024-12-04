import { FlexBox, FlexUl } from "../../../../atoms/FlexBox";
import { Text } from "../../../../atoms/Text";
import { useAppDispatch } from "../../../../redux/store";
import { deleteSessionThunk } from "../../../../redux/library/library.thunks";
import { DiaryTabContainer } from "./Tabs.styled";
import SquareIcon from "../../../../assets/SquareIcon";
import DiarySession from "../components/Session";
import { HasSessions } from "../../../../types/books";
import { SessionEntity } from "../../../../types/stats";

const DiaryTab = ({
  stats,
  bookPages = 0,
  bookId,
}: {
  stats?: HasSessions & { totalRead?: number };
  bookPages?: number;
  bookId?: string;
}) => {
  const dispatch = useAppDispatch();

  const handleDeleteSession = ({ key, date }: any) => {
    dispatch(
      deleteSessionThunk({
        args: {
          sessionId: key,
          date,
          bookId,
        },
      })
    );
  };
  return (
    <DiaryTabContainer $gap="20px">
      {stats?.sessions &&
        Object.entries(stats.sessions)?.map(([date, sessions]) => {
          const total = Object.values(sessions).reduce((acc, next) => {
            return acc + (next as any).pagesRead;
          }, 0);

          return (
            <FlexBox key={date} $gap="8px" className="DiaryTab" $fillWidth>
              <FlexBox
                $fDirection="row"
                $gap="10px"
                $fillWidth
                $justify="space-between"
              >
                <FlexBox $fDirection="row" $gap="10px" $align="flex-start">
                  <SquareIcon />
                  <Text $primary>{date}</Text>
                </FlexBox>
                <Text style={{ whiteSpace: "nowrap" }}>{`${total} pages`}</Text>
              </FlexBox>

              <FlexUl $gap="8px">
                {Object.entries(sessions).map(
                  ([key, session]: [key: string, session: SessionEntity]) => {
                    return (
                      <DiarySession
                        key={key}
                        session={session}
                        bookPages={bookPages}
                        onDelete={() => handleDeleteSession({ key, date })}
                      />
                    );
                  }
                )}
              </FlexUl>
            </FlexBox>
          );
        })}
    </DiaryTabContainer>
  );
};

export default DiaryTab;
