import React from "react";
import { Button } from "@nextui-org/react";
import RightIconsSearch from "../../asset/RightIconsSearch";
import Date from "../../asset/date.svg";
import Image from "next/image";
import "../../../../styles/animation.css";
import SwitchButtonDesktop from "../../../../components/ContentDesk/SwitchButtonDesktop";
import SwitchButtonMobile from "../../../../components/ContentDesk/SwitchButtonMobile";

export default function Content_Desk() {
  return (
    <>
      <div className="flex items-center mt-10 gap-5 rounded-3xl">
        <div className="dark:bg-gradient-to-br dark:from-[#1d1c20] dark:via-neutral-950 dark:to-black bg-gradient-to-br from-neutral-200 to-neutral-300 rounded-3xl p-7">
          <header className="heading">
            <h1 className="text-xl dark:text-neutral-200 font-semibold">aesthetic and modern search menu</h1>
            <p className="max-w-sm mt-3 dark:text-neutral-200 text-sm">The design we created in the search menu kit can be integrated into various layout designs.</p>
          </header>

          {/* search bar */}
          <div className="mt-20 mb-32 mr-10 ml-10 flex items-center justify-center">
            <div className="relative search-animate flex items-center gap-2">
              <input type="text" placeholder="An app to book" className="w-72 pl-10 pr-16 py-3 rounded-full bg-[#39393f] text-white focus:outline-none  placeholder-gray-400" />
              <Button radius="full">Generate</Button>
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white">
                <RightIconsSearch />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="dark:bg-gradient-to-br dark:from-[#1d1c20] dark:via-neutral-950 dark:to-black bg-gradient-to-br from-neutral-200 to-neutral-300 rounded-3xl p-7">
            <header className="heading">
              <h1 className="text-xl  dark:text-neutral-200  font-semibold">aesthetic and modern search menu</h1>
              <p className="max-w-sm  dark:text-neutral-200  mt-3 text-sm">The design we created in the search menu kit can be integrated into various layout designs.</p>
            </header>

            {/* date Asset */}
            <div className="flex animate-date justify-center mt-9">
              <Image src={Date} width={200} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
