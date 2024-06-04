"use client";
import React, { useState, useEffect } from "react";
import HeroDesktop from "./layout/Desktop/Hero";
import HeroMobile from "./layout/Mobile/Hero";

const HeroSection: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0);
  const [viewType, setViewType] = useState("");

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  useEffect(() => {
    if (windowWidth >= 768) {
      setViewType("Desktop");
    } else {
      setViewType("Mobile");
    }
  }, [windowWidth]);

  return (
    <div>
      {viewType === "Desktop" ? (
        <div>
          <HeroDesktop />
        </div>
      ) : (
        <div>
          <HeroMobile />
        </div>
      )}
    </div>
  );
};

export default HeroSection;
