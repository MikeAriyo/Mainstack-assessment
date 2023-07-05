import AllTabs from "../tabs/allTabs";
import Image from "next/image";

const LineChart = () => {
  return (
    <>
      <AllTabs />

      <div className="w-full w-[100%]  min-h-[50vh] rounded-xl border-[1px] border-[#EFF1F6] p-5">
        <div className="flex justify-between items-center mb-3">
          <div className="">
            <h2 className="font-bold">Page Views</h2>
            <p className="text-[14px]">All time</p>
          </div>

          <div style={{ cursor: "pointer" }}>
            <Image
              alt={"navigation"}
              src={"views.svg"}
              width={20}
              height={20}
            />
          </div>
        </div>

        <h1 className="font-bold text-[3rem]">500</h1>
        {/* <div className="w-[100%]  min-h-auto xl:h-[400px]">
              {showChart&&<Line options={config.options} data={config.data} />}
            </div> */}
      </div>
    </>
  );
};

export default LineChart;
