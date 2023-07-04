import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

type ActiveLinkProps = {
  children: any;
  href: string;
  icon: string;
};

function ActiveLink({ children, href, icon }: ActiveLinkProps) {
  const router = useRouter();
  const isActive = router.asPath.includes(href);

  return (
    <div
      style={{ borderRadius: "1.8px" }}
      className={`w-full font-bold flex items-center p-2 mb-4 ${
        isActive
          ? "font-bold backdrop:text-[#FF5403] border-l-4 border-[#FF5403]"
          : "text-[#56616B]"
      }`}
    >
      <img
        alt={children}
        className="ml-8 mr-4"
        src={icon}
        width={18}
        height={20}
      />
      <Link href={href} className="text-[16px]">
        {children}
      </Link>
    </div>
  );
}

export default ActiveLink;
