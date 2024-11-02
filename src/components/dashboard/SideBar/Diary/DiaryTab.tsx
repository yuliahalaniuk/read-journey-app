import React from "react";
import { FlexBox } from "../../../../atoms/Flex";
import { Text } from "../../../../atoms/Text";
import DeleteBtmIcon from "../../../../assets/DeleteBtmIcon";
import { BaseButton } from "../../../../atoms/Buttons";

const DiaryTab = ({
  stats,
  bookPages = 0,
}: {
  stats?: any;
  bookPages?: number;
}) => {
  return (
    <>
      {stats &&
        Object.entries(stats.sessions)?.map(([date, sessions]) => {
          const total = Object.values(sessions as any).reduce((acc, next) => {
            return acc + (next as any).pagesRead;
          }, 0);

          return (
            <FlexBox key={date} $gap="28px">
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
                <Text style={{ whiteSpace: "nowrap" }}>{`${total} pages`}</Text>
              </FlexBox>

              <FlexBox $gap="28px">
                {Object.values(sessions as any).map((session: any) => {
                  const time = (session.endTime - session.startTime) / 1000;
                  console.log("session in here", session);
                  return (
                    <FlexBox
                      key={session.id}
                      style={{ paddingLeft: "20px" }}
                      $fDirection="row"
                    >
                      <FlexBox $gap="8px" $align="flex-start">
                        <Text $primary $textAlign="left" $size="20px">
                          {((session.pagesRead * 100) / bookPages).toFixed(0) +
                            "%"}
                        </Text>
                        <Text $textAlign="left">
                          {`${session.pagesRead} pages read`}
                        </Text>
                      </FlexBox>

                      <FlexBox $fDirection="row">
                        <Text $textAlign="left">
                          {`${(session.pagesRead / (time / 3600)).toFixed(
                            0
                          )} pages per hour`}
                        </Text>
                        <BaseButton>
                          <DeleteBtmIcon />
                        </BaseButton>
                      </FlexBox>
                    </FlexBox>
                  );
                })}
              </FlexBox>
            </FlexBox>
          );
        })}
    </>
  );
};

export default DiaryTab;
