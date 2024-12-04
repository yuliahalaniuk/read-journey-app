import React from "react";
import { FlexBox } from "../../../../atoms/Flex";
import { Text } from "../../../../atoms/Text";
import DeleteBtmIcon from "../../../../assets/DeleteBtmIcon";
import { BaseButton } from "../../../../atoms/Buttons";
import { useAppDispatch } from "../../../../redux/store";
import { deleteSessionThunk } from "../../../../redux/library/library.thunks";
import DiaryGraph from "../../../grahps/HorisontalBar";
import { DiaryTabContainer } from "./Tabs.styled";

const DiaryTab = ({
  stats,
  bookPages = 0,
  bookId,
}: {
  stats?: any;
  bookPages?: number;
  bookId?: string;
}) => {
  const dispatch = useAppDispatch();

  return (
    <DiaryTabContainer $gap="20px" style={{ width: "313px" }}>
      {stats?.sessions
        ? Object.entries(stats.sessions)?.map(([date, sessions]) => {
            const total = Object.values(sessions as any).reduce((acc, next) => {
              return acc + (next as any).pagesRead;
            }, 0);

            return (
              <FlexBox key={date} $gap="28px" className="DiaryTab">
                <FlexBox $fDirection="row" $gap="10px" $justify="space-between">
                  <FlexBox $fDirection="row" $gap="10px" $align="flex-start">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="20" height="20" rx="4" fill="#F9F9F9" />
                      <rect
                        x="4"
                        y="4"
                        width="12"
                        height="12"
                        rx="2"
                        fill="#141414"
                      />
                    </svg>
                    <Text $primary>{date}</Text>
                  </FlexBox>
                  <Text
                    style={{ whiteSpace: "nowrap" }}
                  >{`${total} pages`}</Text>
                </FlexBox>

                <FlexBox $gap="28px">
                  {Object.entries(sessions as any).map(
                    ([key, session]: [key: string, session: any]) => {
                      const time = session.duration;
                      return (
                        <FlexBox
                          key={session.id}
                          style={{ paddingLeft: "20px" }}
                          $fDirection="row"
                          $align="center"
                        >
                          <FlexBox $gap="8px" $align="flex-start">
                            <Text $primary $textAlign="left" $size="20px">
                              {((session.pagesRead * 100) / bookPages).toFixed(
                                0
                              ) + "%"}
                            </Text>
                            <Text $textAlign="left">
                              {time > 60
                                ? `${Math.floor(time / 60)} minutes`
                                : `${Math.floor(time)} seconds`}
                            </Text>
                          </FlexBox>

                          <FlexBox $fDirection="row" $align="center">
                            <FlexBox $gap="8px">
                              <DiaryGraph gData={[10, 15]} />

                              <Text $textAlign="left" $size="12px">
                                {`${(session.pagesRead / (time / 3600)).toFixed(
                                  0
                                )} pages per hour`}
                              </Text>
                            </FlexBox>
                            <BaseButton
                              onClick={() => {
                                dispatch(
                                  deleteSessionThunk({
                                    args: {
                                      sessionId: key,
                                      date,
                                      bookId,
                                    },
                                  })
                                );
                              }}
                            >
                              <DeleteBtmIcon />
                            </BaseButton>
                          </FlexBox>
                        </FlexBox>
                      );
                    }
                  )}
                </FlexBox>
              </FlexBox>
            );
          })
        : "Not found"}
    </DiaryTabContainer>
  );
};

export default DiaryTab;
