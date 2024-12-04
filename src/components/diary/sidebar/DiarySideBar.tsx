import { SidebarContainer } from "../../../atoms/SidebarContainer";
import { PageFormData } from "../../../data/formFieldsInfo";
import { DiaryTabsEnum } from "../../../types/global";
import { useMemo, useState } from "react";

import Layout from "./Layout";
import DiaryTab from "./tabs/DiaryTab";
import { BookEntity } from "../../../types/books";
import { useLibrarySelector } from "../../../redux/selectors";
import PageForm from "../../forms/PageForm";
import StatisticsTab from "./tabs/StatisticsTab";
import ProgressTab from "./tabs/ProgressTab";

const DiarySideBar = ({
  handleSubmit,
  isStarted,
  handlePageFormStart,
}: {
  handleSubmit?: (data: PageFormData) => void;
  isStarted?: boolean;
  book?: { info: BookEntity };
  handlePageFormStart?: (data: PageFormData) => void;
}) => {
  const {
    currentBook: { totalRead, info, sessions },
  } = useLibrarySelector();

  const [tab, setTab] = useState<DiaryTabsEnum>(DiaryTabsEnum.Statistics);

  const { doughnutData, readPerc } = useMemo(() => {
    const pageCount = info?.volumeInfo?.pageCount || 0;

    const readPerc =
      pageCount > 0 ? ((totalRead * 100) / pageCount).toFixed(0) : "0";

    const data = {
      labels: ["Read", "Left"],
      datasets: [
        {
          data: [totalRead, pageCount - totalRead],
          backgroundColor: ["#30B94D", "#1F1F1F"],
          borderColor: "transparent",
          borderRadius: totalRead === pageCount ? [0, 0] : [12, 0],
        },
      ],
    };

    return {
      doughnutData: data,
      readPerc,
    };
  }, [info?.volumeInfo?.pageCount, totalRead]);

  const renderTab = useMemo(() => {
    if (sessions && Object.values(sessions).length) {
      if (tab === DiaryTabsEnum.Diary) {
        return (
          <Layout
            title="Diary"
            handleChangeTab={(tab) => {
              setTab(tab);
            }}
            tab={tab}
          >
            <DiaryTab
              bookId={info?.id}
              stats={{ sessions, totalRead }}
              bookPages={info?.volumeInfo?.pageCount}
            />
          </Layout>
        );
      }

      if (tab === DiaryTabsEnum.Statistics) {
        return (
          <Layout
            title="Statistics"
            handleChangeTab={(tab) => {
              setTab(tab);
            }}
            tab={tab}
          >
            <StatisticsTab
              readPerc={readPerc}
              totalRead={totalRead}
              doughnutData={doughnutData}
            />
          </Layout>
        );
      }
    } else {
      return <ProgressTab />;
    }
  }, [
    sessions,
    tab,
    info?.id,
    info?.volumeInfo?.pageCount,
    totalRead,
    readPerc,
    doughnutData,
  ]);

  return (
    <SidebarContainer $gap="40px" className="SidebarContainer">
      <PageForm
        action={isStarted ? "stop" : "start"}
        maxPages={info?.volumeInfo?.pageCount}
        minPages={totalRead || 0}
        onValid={isStarted ? handleSubmit : handlePageFormStart}
      />

      {renderTab}
    </SidebarContainer>
  );
};

export default DiarySideBar;
