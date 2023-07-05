import Link from "next/link";
import { pieChartData } from "../../../stub/pieChartData";
import { resultType } from "../../../types";

const PieChart = () => {
  return (
    <main className="mt-8 flex flex-wrap gap-3 justify-between">
      {pieChartData.map(({ id, title, text, link }: any, i: number) => (
        <div
          key={i.toString()}
          className="w-full lg:w-[49%] border-[1px] rounded-xl border-[#EFF1F6]"
        >
          <div className="flex justify-between items-center min-w-[100%]  p-4">
            <h2>{title}</h2>
            <div className="">
              <Link href={link} className="text-[#FF5402] text-[13px]">
                {text}
              </Link>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
};

export default PieChart;
