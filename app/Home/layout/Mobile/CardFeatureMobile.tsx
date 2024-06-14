import React from "react";
const Card = ({ titleHeading, description, backgroundColor, borderRadius }: { image: string; titleHeading: string; description: string; backgroundColor?: string; borderRadius?: string }) => {
  return (
    <div className="w-[350px] mx-auto h-60 rounded overflow-hidden mt-10 shadow-lg dark:shadow-2xl dark:shadow-neutral-900" style={{ backgroundColor: backgroundColor, borderRadius: borderRadius }}>
      <div className="p-10">
        <div title="forHeadingTextCard">
          <h1 className="text-xl font-bold">{titleHeading}</h1>
        </div>
        <p className="dark:text-neutral-200 mt-3 max-w-[300px] leading-7 tracking-tighter text-base">{description}</p>
      </div>
    </div>
  );
};

const ThreeCardFlex: React.FC = () => {
  return (
    <>
      <div className="grid items-center justify-center">
        <Card image="https://via.placeholder.com/300" titleHeading="Card 1" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." borderRadius="20px" />
        <div className="text-neutral-200">
          <Card image="https://via.placeholder.com/300" titleHeading="Card 2" description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." backgroundColor="#0072F5" borderRadius="20px" />
        </div>
        <Card image="https://via.placeholder.com/300" titleHeading="Card 3" description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." borderRadius="20px" />
      </div>
    </>
  );
};

export default ThreeCardFlex;
