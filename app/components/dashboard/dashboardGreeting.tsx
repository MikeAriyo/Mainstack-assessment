import Link from "next/link";

const DashboardGreeting = () => {
  // dynamically get time for greeting text
  const time = new Date().getHours();
  let greeting;
  if (time < 12) {
    greeting = "Good Morning";
  } else if (time < 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }
  return (
    <>
      <main className="md:flex justify-between items-center min-w-[100%]  p-4 pl-0">
        <div className="">
          <h2 className="font-bold text-[24px] mb-2 text-[#131316]">
            {greeting}, Blessing ⛅️
          </h2>
          <p className="text-[#31373D]">Check out your dashboard summary.</p>
        </div>

        <div className="">
          <Link href={"#Analytics"} className="text-[#FF5402] text-[13px]">
            View Analytics
          </Link>
        </div>
      </main>
    </>
  );
};

export default DashboardGreeting;
