"use client";

import Link from "next/link";
import { pieChartData } from "../../../../stub/pieChartData";
import { resultType } from "../../../../types";
import TopLocation from "./topLocations";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "../../../../../pages/api/hello";

const PieChart = ({ res }: { res: resultType }) => {
  const [countries, setCode] = useState({} as any);
  const { data, error } = useSWR(
    "https://countriesnow.space/api/v0.1/countries/codes",
    fetcher
  );

  useEffect(() => {
    if (!data && !res.top_locations) return;
    console.log(data, error);
    for (let i = 0; i < data?.data.length; ++i) {
      setCode((prev: any) => {
        return {
          ...prev,
          [data.data[i].name.toLowerCase()]: data.data[i].code,
        };
      });
    }
  }, [res, data]);

  return (
    <main className="mt-8 flex flex-wrap gap-3 justify-between">
      {pieChartData.map(({ id, title, text, link }: any, i: number) => (
        <div
          key={i.toString()}
          className="w-full lg:w-[49%] border-[1px] rounded-xl border-[#EFF1F6]"
        >
          <div className="flex justify-between items-center min-w-[100%]  p-4 font-bold">
            <h2>{title}</h2>
            <div className="">
              <Link href={link} className="text-[#FF5402] text-[13px]">
                {text}
              </Link>
            </div>
          </div>

          {id === "1" ? (
            <TopLocation locationdata={res?.top_locations} flag={countries} />
          ) : (
            //<TopReferral referraldata={res.top_sources} />
            ""
          )}
        </div>
      ))}
    </main>
  );
};

export default PieChart;
