  import React from "react";
  import Image from "next/image";
  import HeroAsset from "../../asset/Capture.png";

  export default function Hero() {
    return (
      <>
        <Image className={"rounded-[25px] mt-5"} src={HeroAsset} alt="asset" height={100} width={1000} />
      </>
    );
  }
