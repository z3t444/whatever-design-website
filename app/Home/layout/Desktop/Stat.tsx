import React from "react";
import { title } from "@/components/primitives";

function StatsSection() {
  const statsData = [
    { number: "50+", description: "Clients" },
    { number: "89K", description: "Followers on social media" },
    { number: "3", description: "Published books" },
    { number: "8", description: "TED talks" },
    { number: "22", description: "Years of experience" },
    { number: "10+", description: "Workshops" },
  ];

  return (
    <section className="mt-12 dark:text-neutral-200">
      <div className="container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-3">
        {statsData.map((stat, index) => (
          <div key={index} className="flex flex-col justify-start m-2 lg:m-5">
            <p className={title({ size: "md" })}>{stat.number}</p>
            <p className="text-sm sm:text-base mt-3">{stat.description}</p>
          </div>
        ))} 
      </div>
    </section>
  );
}

export default StatsSection;
