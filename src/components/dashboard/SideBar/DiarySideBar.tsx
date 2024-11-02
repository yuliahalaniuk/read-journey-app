import { FlexBox } from "../../../atoms/Flex";
import { SidebarContainer } from "../../../atoms/SidebarContainer";
import { SideBarTitle } from "../../../atoms/SideBarTitle";
import { PageFormData } from "../../../data/formFieldsInfo";
import { Text, TextWithAccent } from "../../../atoms/Text";
import { CircleImgWrapper } from "../../../atoms/CircleImgWrapper";
import { SizeTypeEnum } from "../../../types/global";
import { SecondaryBaseBox } from "../../../atoms/BaseBox";

import { useEffect, useMemo, useState } from "react";

import { onValue, ref } from "firebase/database";
import { database } from "../../../firebase/firebase";
import { useLocation } from "react-router-dom";
import { userId } from "../../../providers/LibraryProvider";
import Layout from "./Diary/Layout";
import DiaryTab from "./Diary/DiaryTab";
import { BookEntity } from "../../../types/books";
import DoughnutGraph from "./Doughnut/DoughnutGraph";

export enum DiaryTabsEnum {
  Progress = "progress",
  Diary = "diary",
  Statistics = "statistics",
}

const DiarySideBar = ({
  handleSubmit,
  isStarted,
  book,
}: {
  handleSubmit?: (data: PageFormData) => void;
  isStarted?: boolean;
  book?: BookEntity;
}) => {
  const location = useLocation();
  const path = location.pathname.split("/");
  const bookId = path[path.length - 1];
  const [stats, setStats] = useState<{ sessions?: any; totalRead?: number }>(
    {}
  );

  const { doughnutData, readPerc } = useMemo(() => {
    const totalRead = stats.totalRead || 0;
    const pageCount = book?.volumeInfo?.pageCount || 0;

    const readPerc =
      pageCount > 0 ? ((totalRead * 100) / pageCount).toFixed(0) : "0";

    const data = {
      labels: ["Read", "Left"],
      datasets: [
        {
          data: [totalRead, pageCount - totalRead],
          backgroundColor: ["#30B94D", "#1F1F1F"],
          borderColor: "transparent",
          borderRadius: [12, 0],
        },
      ],
    };

    return {
      doughnutData: data,
      readPerc,
    };
  }, [book?.volumeInfo?.pageCount, stats.totalRead]);

  useEffect(() => {
    const userBooksRef = ref(database, `users/${userId}/stats/${bookId}`);

    onValue(userBooksRef, (snapshot) => {
      const data = snapshot.val();
      // console.log("stats in sidebar", Object.entries(data));
      setStats(data);
    });
  }, [bookId]);

  const [tab, setTab] = useState<DiaryTabsEnum>(DiaryTabsEnum.Statistics);

  const renderTab = useMemo(() => {
    if (tab === DiaryTabsEnum.Progress) {
      return (
        <FlexBox
          $gap="20px"
          $align="flex-start"
          style={{ padding: "0 0 84px" }}
        >
          <SideBarTitle>Progress</SideBarTitle>

          <TextWithAccent $textAlign="left" style={{ marginBottom: "50px" }}>
            Here you will see when and how much you read. To record, click on
            the red button above.
          </TextWithAccent>

          <FlexBox>
            <CircleImgWrapper $type={SizeTypeEnum.S}>
              <img
                src={"/images/star.png"}
                alt={"Star"}
                width={50}
                height={70}
              />
            </CircleImgWrapper>
          </FlexBox>
        </FlexBox>
      );
    }

    if (tab === DiaryTabsEnum.Diary) {
      return (
        <Layout
          title="Diary"
          handleChangeTab={(tab) => {
            setTab(tab);
          }}
          tab={tab}
        >
          <SecondaryBaseBox $gap="20px" style={{ overflow: "auto" }}>
            <DiaryTab stats={stats} bookPages={300} />
          </SecondaryBaseBox>
        </Layout>
      );
    }

    if (tab === DiaryTabsEnum.Statistics) {
      return (
        <Layout
          title="Diary"
          handleChangeTab={(tab) => {
            setTab(tab);
          }}
          tab={tab}
        >
          <TextWithAccent $textAlign="left">
            Each page, each chapter is a new round of knowledge, a new step
            towards understanding. By rewriting statistics, we create our own
            reading history.
          </TextWithAccent>
          <SecondaryBaseBox $gap="20px">
            <DoughnutGraph data={doughnutData} />

            <FlexBox
              $fDirection="row"
              $gap="16px"
              $justify="flex-start"
              $align="flex-start"
              style={{ maxWidth: "max-content" }}
            >
              <div
                style={{
                  width: "14px",
                  height: "14px",
                  backgroundColor: "#30B94D",
                  borderRadius: "4px",
                  flexShrink: 0,
                  marginTop: "2px",
                }}
              ></div>

              <FlexBox $gap="8px" $align="flex-start">
                <Text $primary $textAlign="left" $size="20px">
                  {readPerc}%
                </Text>
                <Text $textAlign="left">
                  {(stats?.totalRead || 0) + " "}pages read
                </Text>
              </FlexBox>
            </FlexBox>
          </SecondaryBaseBox>
        </Layout>
      );
    }
  }, [doughnutData, readPerc, stats, tab]);

  return <SidebarContainer $gap="20px">{renderTab}</SidebarContainer>;
};

export default DiarySideBar;
