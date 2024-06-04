import React from "react";
import RightIconsSearch from "../../asset/RightIconsSearch";
import { Button } from "@nextui-org/react";
import Date from "../../asset/date.svg";
import Image from "next/image";
import "../../../../styles/animation.css";

export default function Content_Desk() {
  return (
    <>
      <div className="grid items-center mt-20 gap-5 rounded-3xl">
        <div className="bg-gradient-to-br from-[#1d1c20] via-neutral-950 to-black rounded-3xl p-7">
          <header>
            <h1 className="text-xl font-semibold">aesthetic and modern search menu</h1>
            <p className="max-w-sm mt-3">The design we created in the search menu kit can be integrated into various layout designs.</p>
          </header>

          {/* search bar */}
          <div className="mt-16 mb-24 flex items-center justify-center">
            <div className="relative search-animate flex items-center gap-2">
              <input type="text" placeholder="An app to book" className="w-64 pl-10 pr-16 py-3 rounded-full bg-[#39393f] text-white focus:outline-none  placeholder-gray-400" />
              <Button radius="full">Generate</Button>
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white">
                <RightIconsSearch />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-gradient-to-br overflow-hidden from-[#1d1c20] via-neutral-950 to-black rounded-3xl p-7">
            <header className="heading">
              <h1 className="text-xl font-semibold">aesthetic and modern search menu</h1>
              <p className="max-w-sm mt-3 text-sm">The design we created in the search menu kit can be integrated into various layout designs.</p>
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
