// src/components/GeniusGrid.tsx
import React from "react";
import { Button } from "@nextui-org/button";
import RightIconsSearch from "./asset/RightIconsSearch";
import "../../styles/animation.css";
import Image from "next/image";
import Date from "./asset/date.svg";
import { Switch } from "@nextui-org/switch";

const GridCardContent: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-24">
      <div className="dark:bg-gradient-to-br dark:from-[#1d1c20] dark:via-neutral-950 dark:to-black bg-gradient-to-br from-neutral-200 to-neutral-300 rounded-3xl p-7">
        <header className="heading">
          <h1 className="text-xl dark:text-neutral-200 font-semibold">aesthetic and modern search menu</h1>
          <p className="max-w-sm mt-3 dark:text-neutral-200 text-sm">The design we created in the search menu kit can be integrated into various layout designs.</p>
        </header>

        {/* search bar */}
        <div className="mt-20 mb-32 mr-10 ml-10 scale-85 lg:scale-110 flex items-center justify-center">
          <div className="relative search-animate flex items-center gap-2">
            <input type="text" placeholder="An app to book" className="max-w-60 pl-10 pr-16 py-3 rounded-full bg-[#39393f] text-white focus:outline-none  placeholder-gray-400" />
            <Button radius="full">Generate</Button>
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white">
              <RightIconsSearch />
            </div>
          </div>
        </div>
      </div>
      <div className="dark:bg-gradient-to-br dark:from-[#1d1c20] dark:via-neutral-950 dark:to-black bg-gradient-to-br from-neutral-200 to-neutral-300 rounded-3xl p-7">
        <header className="heading">
          <h1 className="text-xl  dark:text-neutral-200  font-semibold">aesthetic and modern Date UI</h1>
          <p className="max-w-sm  dark:text-neutral-200  mt-3 text-sm">The design we created in the search menu kit can be integrated into various layout designs.</p>
        </header>

        {/* date Asset */}
        <div className="flex animate-date justify-center mt-9">
          <Image src={Date} width={200} alt="" />
        </div>
      </div>
      <div className="dark:bg-gradient-to-br dark:from-[#1d1c20] dark:via-neutral-950 dark:to-black bg-gradient-to-br from-neutral-200 to-neutral-300 rounded-3xl p-7">
        <header className="heading">
          <h1 className="text-xl dark:text-neutral-200 font-semibold">aesthetic and modern Button Click</h1>
          <p className="max-w-sm mt-3 dark:text-neutral-200 text-sm">The design we created in the search menu kit can be integrated into various layout designs.</p>
        </header>

        <div className="mt-20 mb-14 mr-10 ml-10 flex items-start justify-center">
          <Switch></Switch>
          <ul className="grid items-center gap-4">
            <Button className="rounded-full" size="sm" color="primary">
              Click
            </Button>
            <Button className="rounded-full" size="md" color="warning">
              Click
            </Button>
            <Button className="rounded-full" size="lg" color="danger">
              Click
            </Button>
          </ul>
        </div>
      </div>
      <div className="dark:bg-gradient-to-br dark:from-[#1d1c20] dark:via-neutral-950 dark:to-black bg-gradient-to-br from-neutral-200 to-neutral-300  p-6 rounded-md">
        <h3 className="text-lg font-semibold">Works with your design system</h3>
        <p>Genius leverages any design system to provide smart recommendations.</p>
      </div>
      <div className="dark:bg-gradient-to-br dark:from-[#1d1c20] dark:via-neutral-950 dark:to-black bg-gradient-to-br from-neutral-200 to-neutral-300  p-6 rounded-md">
        <h3 className="text-lg font-semibold">Powered by UI-AI</h3>
        <p>An AI model for designers.</p>
      </div>
      <div className="dark:bg-gradient-to-br dark:from-[#1d1c20] dark:via-neutral-950 dark:to-black bg-gradient-to-br from-neutral-200 to-neutral-300  p-6 rounded-md">
        <h3 className="text-lg font-semibold">Uses Smart Elements</h3>
        <p>Set the structure, then describe the UI to have Genius design it.</p>
      </div>
      <div className="dark:bg-gradient-to-br dark:from-[#1d1c20] dark:via-neutral-950 dark:to-black bg-gradient-to-br from-neutral-200 to-neutral-300  p-6 rounded-md">
        <h3 className="text-lg font-semibold">Invite to any Figma file</h3>
        <p>Invite Genius to any file to get a personal design assistant.</p>
      </div>
      <div className="dark:bg-gradient-to-br dark:from-[#1d1c20] dark:via-neutral-950 dark:to-black bg-gradient-to-br from-neutral-200 to-neutral-300  p-6 rounded-md">
        <h3 className="text-lg font-semibold">Chat with Genius</h3>
        <p>Genius can consult and act on any design-related questions.</p>
        <button className="mt-4 p-2 bg-blue-600 rounded-md">How can I help?</button>
      </div>
    </div>
  );
};

export default GridCardContent;
