import { useCallback } from "react";
import { chartColors } from "../../../../stub/chartColors";
import Flag from "react-world-flags";
import { Doughnut } from "react-chartjs-2";

const TopLocation = ({
  locationdata,
  flag,
}: {
  locationdata: { country: string; count: number; percent: number }[];
  flag: any;
}) => {
  function handleSortingList() {
    const limit = 4;
    let getCountries: any[];
    let getOthers: any;
    let getCounts: any;

    if (locationdata.length <= 4) {
      getCountries = locationdata;
      getCounts = locationdata
        .map(({ count }) => count)
        .reduce((acc, cur) => acc + cur);
    } else {
      getCountries = locationdata.slice(0, 4);
      getOthers = locationdata
        .slice(4)
        .map(({ percent }) => percent)
        .reduce((acc, cur) => acc + cur);
      getCounts = locationdata
        .slice(4)
        .map(({ count }) => count)
        .reduce((acc, cur) => acc + cur);
    }

    const data: any[] = getCountries.map(({ country, count, percent }, i) => {
      return {
        country,
        color: chartColors[i],
        percent,
        count,
        flagId: flag[country.toLowerCase()],
      };
    });

    if (locationdata.length > limit) {
      data.push({
        country: "Others",
        color: chartColors[chartColors.length - 1],
        percent: getOthers,
        count: getCounts,
      });
    }

    return data;
  }

  const memoized = useCallback(handleSortingList, [locationdata, flag]);
  const data = {
    labels: memoized().map(({ country }) => country),
    datasets: [
      {
        label: "Count",
        data: memoized().map(({ count }) => count),
        backgroundColor: chartColors,
        borderColor: chartColors,
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
  };

  return (
    <>
      <main className="sm:flex justify-around items-center">
        <ul className="sm:w-[50%] w-full p-4">
          {memoized().map(({ country, percent, color, count, flagId }, i) => (
            <li key={i.toString()} className="flex  mb-3 text-[#131316]">
              {!flagId ? (
                <div className="w-[24] mr-[1.5rem]"></div>
              ) : (
                <Flag code={flagId} width={24} className={"rounded-[10px]"} />
              )}
              <div className="mx-3 font-[100] text-[16px]">{country}</div>
              <div className="mr-2 font-[500]">{percent}%</div>
              <div
                className={`w-[12px] h-[12px] mt-2 rounded-full`}
                style={{ background: color }}
              ></div>
            </li>
          ))}
        </ul>

        <div className="w-[40%] p-3 md:p-0">
          <Doughnut data={data} options={options} width={50} height={50} />
        </div>
      </main>
    </>
  );
};

export default TopLocation;
