"use client"

import { useState, useEffect } from "react";

export const Top = ({ text = "" }: { text: string }) => {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsTop(false);
      } else {
        setIsTop(true);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  if (!text) {
    return null;
  }
  return (
    <div className={`bg-zinc-800 relative z-50 text-zinc-50 w-full text-center transition-all duration-700 ease-in-out ${isTop ? "py-3 sm:py-1 h-10" : "h-0"}`}>
      <h2 className="text-sm sm:text-lg lg:text-2xl font-semibold h-5 sm:h-8 text-ellipsis overflow-hidden uppercase">{text}</h2>
    </div>
  )
}