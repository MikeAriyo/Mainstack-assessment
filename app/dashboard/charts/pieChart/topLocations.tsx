import Flag from "react-world-flags";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { chartColors } from "../../../stub/chartColors";

ChartJS.register(ArcElement, Tooltip);

const TopLocation = ({
  countries,
}: {
  countries: {
    country: string;
    count: number;
    percent: number;
    flagId: string;
    color: string;
  }[];
}) => {
  const data = {
    labels: countries?.map(({ country }) => country),
    datasets: [
      {
        label: "Count",
        data: countries?.map(({ count }) => count),
        backgroundColor: chartColors,
        borderColor: chartColors,
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <>
      <main className="sm:flex justify-around items-center pb-6">
        <ul className="sm:w-[50%] w-full p-4">
          {countries.map(({ country, percent, color, count, flagId }, i) => (
            <li key={i.toString()} className="flex  mb-3 text-[#131316]">
              {!flagId ? (
                <div className="w-[24] mr-[1.5rem]"></div>
              ) : (
                <Flag code={flagId} width={24} className={"rounded-[10px]"} />
              )}
              <div className="mx-3 font-semibold text-[16px]">{country}</div>
              <div className="mr-2 font-semibold">{percent}%</div>
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
