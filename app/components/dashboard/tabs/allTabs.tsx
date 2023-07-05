import { tabButtons } from "../../../stub/tabButtons";
import TabButtons from "./tabButtons";

const AllTabs = () => {
  return (
    <>
      <div className="flex gap-4 p-2 mt-4 mb-4 w-full overflow-x-scroll md:overflow-x-hidden">
        {tabButtons.map(({ title, duration }, i) => (
          <TabButtons key={i.toString()} duration={duration}>
            {title}
          </TabButtons>
        ))}
      </div>
    </>
  );
};

export default AllTabs;
