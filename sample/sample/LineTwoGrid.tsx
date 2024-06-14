import { Button } from "@nextui-org/button";
import { Switch } from "@nextui-org/switch";
import React from "react";

export default function LineTwoGrid() {
  return (
    <div className="flex items-center justify-center gap-5">
      <div className="dark:bg-gradient-to-br dark:from-[#1d1c20] dark:via-neutral-950 dark:to-black bg-gradient-to-br from-neutral-200 to-neutral-300 rounded-3xl max-w-[480px] p-7">
        <header className="heading">
          <h1 className="text-xl dark:text-neutral-200 font-semibold">aesthetic and modern Button Click</h1>
          <p className="max-w-sm mt-3 dark:text-neutral-200 text-sm">The design we created in the search menu kit can be integrated into various layout designs.</p>
        </header>

        {/* kit components */}
        <div className="mt-20 mb-14 mr-10 ml-10 flex items-start justify-center">
          <Switch></Switch>
          <ul className="grid items-center gap-4">
            <Button className="rounded-full" size="sm" color="primary">
              Click
            </Button>
            <Button className="rounded-full" size="md" color="primary">
              Click
            </Button>
            <Button className="rounded-full" size="lg" color="primary">
              Click
            </Button>
          </ul>
        </div>
      </div>
      <div>
        <div className="dark:bg-gradient-to-br dark:from-[#1d1c20] dark:via-neutral-950 dark:to-black bg-gradient-to-br from-neutral-200 to-neutral-300 rounded-3xl max-w-[480px] p-7">
          <header className="heading">
            <h1 className="text-xl dark:text-neutral-200 font-semibold">aesthetic and modern Button Click</h1>
            <p className="max-w-sm mt-3 dark:text-neutral-200 text-sm">The design we created in the search menu kit can be integrated into various layout designs.</p>
          </header>

          {/* kit components */}
          <div className="mt-20 mb-14 mr-10 ml-10 flex items-start justify-center">
            <Switch></Switch>
            <ul className="grid items-center gap-4">
              <Button className="rounded-full" size="sm" color="primary">
                Click
              </Button>
              <Button className="rounded-full" size="md" color="primary">
                Click
              </Button>
              <Button className="rounded-full" size="lg" color="primary">
                Click
              </Button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
