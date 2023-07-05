import Link from "next/link";

const TabButtons = ({
  children,
  duration,
}: {
  children: any;
  duration: string;
}) => {
  const active = false;
  return (
    <>
      <Link
        className={`min-w-fit p-3 border-[1px] border-[#EFF1F6] text-[14px] text-[#31373D] font-[500] rounded-full 
        ${
          active ? "text-[#FF5403] bg-[#FFEEE5] border-[#FF5403]" : ""
        } transition-all`}
        href={`?views=${duration}`}
      >
        {children}
      </Link>
    </>
  );
};

export default TabButtons;
