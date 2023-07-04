import Image from "next/image";
import { motion } from "framer-motion";

const SideNav = () => {
  return (
    <>
      <main className="border-[#eff1f6] hidden fixed left-0 lg:block top-0 min-w-[304px] overflow-y-scroll h-[100vh] border-r-[1px]">
        <div className="h-[120px] flex items-center ml-8">
          <Image alt={"navigation"} src={"logo.svg"} width={50} height={20} />
        </div>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className=""
        >
          <p>fdfddfdfdfdfd</p>
        </motion.ul>
      </main>
    </>
  );
};
