import Image from "next/image";

const LoggedInUser = () => {
  return (
    <>
      <div className="flex justify-around items-center mt-20">
        <div className="flex items-center">
          <Image
            src={"Blessing.svg"}
            alt={"Blessings Daniels"}
            className="w-[30px] h-[30px] mr-2"
            style={{ borderRadius: "50%" }}
            width={30}
            height={30}
          />
          <span className="text-[15px]"> Blessings Daniels </span>
        </div>

        <div
          style={{ cursor: "pointer" }}
          className="w-[20px] h-[20px] bg-[#fdfdfd] rounded-full flex justify-center items-center"
        >
          <Image alt={"navigation"} src={"more.svg"} width={50} height={20} />
        </div>
      </div>
    </>
  );
};

export default LoggedInUser;
