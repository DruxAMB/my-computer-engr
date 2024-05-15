"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function ArrowUp() {
  const [scrolledDown, setScrolledDown] = useState(false);

  useEffect(() => {
    const handleScoll = () => {
      const scrolled = scrollY > 0;
      setScrolledDown(scrolled);
    };

    window.addEventListener("scroll", handleScoll);

    return () => {
      window.removeEventListener("scroll", handleScoll);
    };
  }, []);

  return (
    <div>
      {scrolledDown && (
        <a href="#" className="fixed bottom-5 right-5 z-50">
          <Image
            src="/icons/up-arrow.svg"
            alt="arrowUp"
            height={30}
            width={40}
            className="slow bg-orange-400 hover:bg-blue-800 p-2"
          />
        </a>
      )}
    </div>
  );
}
