"use client";
import React, { useState, useEffect } from "react";

const HeroSection: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0);
  const [viewType, setViewType] = useState("");

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth >= 768) {
      setViewType("Desktop");
    } else {
      setViewType("Mobile");
    }
  }, [windowWidth]);

  return <div>{viewType === "Desktop" ? <div></div> : <div></div>}</div>;
};

export default HeroSection;
