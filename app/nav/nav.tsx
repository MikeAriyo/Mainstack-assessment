"use client";

import Image from "next/image";
import { navLinks } from "../stub/navLinks";
import ActiveLink from "./active";
import { LinkProps } from "../types";
import style from "../styles/sidebar.module.css";
import LoggedInUser from "./loggedInUser";

const Nav = () => {
  return (
    <div>
      <main
        className={`border-[#eff1f6] hidden fixed left-0 lg:block top-0 min-w-[304px] overflow-y-scroll h-[100vh] border-r-[1px] ${style.sidebar}`}
      >
        <div className="h-[120px] flex items-center ml-8">
          <Image alt={"navigation"} src={"logo.svg"} width={50} height={20} />
        </div>

        <div>
          {navLinks.main.map(({ icon, title, href }: LinkProps, i: number) => (
            <ActiveLink href={href} icon={icon} key={i.toString()}>
              {" "}
              {title}
            </ActiveLink>
          ))}
        </div>

        <div>
          <div className="mt-8 ml-8 mb-4 text-[#4D5760]">OTHERS 1</div>

          {navLinks.others1.map(
            ({ icon, title, href }: LinkProps, i: number) => (
              <ActiveLink href={href} icon={icon} key={i.toString()}>
                {" "}
                {title}
              </ActiveLink>
            )
          )}
        </div>

        <div>
          <div className="mt-8 ml-8 mb-4 text-[#4D5760]">OTHERS 2</div>

          {navLinks.others2.map(
            ({ icon, title, href }: LinkProps, i: number) => (
              <ActiveLink href={href} icon={icon} key={i.toString()}>
                {" "}
                {title}
              </ActiveLink>
            )
          )}
        </div>

        <div>
          <LoggedInUser />
        </div>
      </main>
    </div>
  );
};

export default Nav;
