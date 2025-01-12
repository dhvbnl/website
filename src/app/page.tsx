"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useMediaQuery } from 'usehooks-ts';
import Linkedin from "./icons/icons8-linkedin.svg";
import Github from "./icons/icons8-github.svg";
import Medium from "./icons/icons8-medium.svg";

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="p-10 w-full">
      {/* Conditional Rendering Based on Screen Size */}
      {isMobile ? (
        // Mobile Layout
        <div className="p-4 w-full flex flex-col justify-center items-center space-y-6">
          <div className="w-full flex justify-center">
            <div className="w-60 h-60 relative">
              <Image
                src="/dhruv.jpg"
                alt="Dhruv Bansal"
                fill={true}
                className="rounded-full object-cover shadow-lg"
              />
            </div>
          </div>

          <div className="w-full text-center">
            <h1 className="text-3xl font-bold mb-2">Dhruv Bansal</h1>
            <hr className="border-t-2 border-foreground mx-auto w-2/3" />
          </div>

          <div className="w-full text-center px-4">
            <p className="text-lg">
              I&apos;m a Computer Science student at the University of Washington with a deep passion for technology and learning!
            </p>
          </div>
        </div>
      ) : (
        // Desktop/Horizontal Layout
        <div className="flex flex-row justify-between items-center mb-5">
          <div className="w-[37.5%] text-left">
            <label className="text-5xl font-bold">Dhruv Bansal</label>
            <hr className="border-t-2 border-foreground w-11/12 mt-2" />
          </div>

          <div className="w-1/4 flex justify-center items-center">
            <div className="w-full aspect-square relative rounded-full">
              <Image
                src="/dhruv.jpg"
                alt="Dhruv Bansal"
                fill={true}
                className="rounded-full"
              />
            </div>
          </div>

          <div className="w-[37.5%] text-right">
            <hr className="border-t-2 border-foreground w-11/12 mb-2 ml-auto" />
            <p className="w-11/12 text-xl text-right ml-auto">
              I&apos;m a Computer Science student at the University of Washington with a deep passion for technology and learning!
            </p>
          </div>
        </div>
      )}
      <div className="w-full flex justify-center items-center space-x-2">
        <a href="https://www.linkedin.com/in/dhvbnl/" target="_blank" rel="noopener noreferrer">
          <Linkedin className="icon fill-foreground" />
        </a>
        <a href="https://www.github.com/dhvbnl" target="_blank" rel="noopener noreferrer">
          <Github className="icon fill-foreground" />
        </a>
        <a href="https://medium.com/@dhvbnl" target="_blank" rel="noopener noreferrer">
          <Medium className="icon fill-foreground" />
        </a>
      </div>
    </div>
  );
}
