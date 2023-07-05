import Flag from "react-world-flags";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { chartColors } from "../../../stub/chartColors";
import { SocialIcon } from "react-social-icons";

ChartJS.register(ArcElement, Tooltip);

const TopSocialReferral = ({
  sources,
}: {
  sources: {
    source: string;
    count: number;
    percent: number;
    color: string;
  }[];
}) => {
  const data = {
    labels: sources?.map(({ source }) => source),
    datasets: [
      {
        label: "Count",
        data: sources?.map(({ count }) => count),
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
      <main className="sm:flex justify-around items-center">
        <ul className="sm:w-[50%] w-full p-4">
          {sources.map(({ source, percent, color, count }, i) => (
            <li
              key={i.toString()}
              className="flex items-center mb-3 text-[#131316]"
            >
              <SocialIcon
                url={`https://${source}.com`}
                className={"rounded-[10px] !w-[20px] !h-[20px]"}
              />

              <div className="mx-3 text-[16px] font-semibold">{source}</div>
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

export default TopSocialReferral;
