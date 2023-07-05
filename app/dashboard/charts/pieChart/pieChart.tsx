"use client";

import Link from "next/link";
import { pieChartData } from "../../../stub/pieChartData";
import TopLocation from "./topLocations";
import { useEffect, useState } from "react";
import { chartColors } from "../../../stub/chartColors";
import TopSocialReferral from "./topReferences";

const PieChart = ({
  topLocations,
  sources,
}: {
  topLocations: any;
  sources: any;
}) => {
  const [countries, setCountries] = useState([] as any);

  useEffect(() => {
    fetch("https://countriesnow.space/api/v0.1/countries/codes", {
      method: "GET",
    }).then(async (res: any) => {
      const data = await res.json();

      let result = [];

      for (let i = 0; i < 4; i++) {
        const element = topLocations[i];
        result.push({
          ...element,
          color: chartColors[i],
          flagId: data.data?.filter(
            (item: any) =>
              item?.name?.toLowerCase() === element?.country?.toLowerCase()
          )[0]?.code,
        });
      }
      const sum = result
        .map((item) => item.percent)
        .reduce((a, b) => Number(a) + Number(b), 0);
      const count = result
        .map(({ count }) => count)
        .reduce((acc, cur) => acc + cur);
      result.push({
        flagId: null,
        country: "Others",
        percent: 100 - sum,
        count,
      });
      setCountries(result);
    });
  }, [topLocations]);

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
            <TopLocation countries={countries} />
          ) : (
            <TopSocialReferral sources={sources} />
          )}
        </div>
      ))}
    </main>
  );
};

export default PieChart;
