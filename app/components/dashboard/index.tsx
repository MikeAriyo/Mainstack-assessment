import Image from "next/image";
import DashboardGreeting from "./dashboardGreeting";
import style from "../../styles/sidebar.module.css";
import AllTabs from "./tabs/allTabs";
import LineChart from "./charts/lineChart";

const DashBoard = () => {
  return (
    <>
      <main
        id="Dashboard"
        className={`fixed right-0 top-0 flex flex-col items-center ${style.sidebar}`}
        style={{ width: "calc(100vw - 304px)" }}
      >
        <div className="flex items-center lg:block w-full p-3 pl-0 backdrop-blur-2xl bg-white">
          <div className="flex items-center ml-3 lg:hidden">
            <Image
              alt={"sidebar icon"}
              src={"logo.svg"}
              width={50}
              height={20}
            />
          </div>
          <div className="dashboard-text font-bold text-[20px] lg:ml-[3rem] ml-[2rem]">
            Dashboard
          </div>
        </div>

        <div className="dashboard-chart w-full h-[100vh] pb-9 pl-[3rem] pr-[3rem] overflow-y-scroll flex flex-col">
          <DashboardGreeting />
          <LineChart />
        </div>
      </main>
    </>
  );
};

export default DashBoard;
