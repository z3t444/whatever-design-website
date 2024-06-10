import React from "react";
import { Switch } from "@nextui-org/switch";
import SwitchComponentsText from "./SwitchComponents";

export default function SwitchButtonDesktop() {
  return (
    <div>
      <div className="dark:bg-gradient-to-br mt-5 dark:from-[#1d1c20] dark:via-neutral-950 dark:to-black bg-gradient-to-br from-neutral-200 to-neutral-300 rounded-3xl p-7">
        <header className="heading">
          <h1 className="text-xl dark:text-neutral-200 font-semibold">aesthetic and modern search menu</h1>
          <p className="max-w-sm mt-3 dark:text-neutral-200 text-sm">The design we created in the search menu kit can be integrated into various layout designs.</p>
        </header>

        {/* switch Toggle Button */}
        <div className="mt-20 mb-32 mr-10 ml-10 flex items-center justify-center">
          <ul className="flex items-center gap-10">
            <Switch defaultSelected size="lg"></Switch>
            <SwitchComponentsText />
          </ul>
        </div>
      </div>
    </div>
  );
}
