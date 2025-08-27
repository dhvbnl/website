"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
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
      {isMobile ? (
        // Mobile Layout
        <div className="p-4 w-full flex flex-col justify-center items-center space-y-6">
          <div className="w-full flex justify-center">
            <div className="w-60 h-60 relative">
              <Image
                src="/dhruv.jpg"
                alt="Dhruv Bansal"
                fill={true}
                className="rounded-full object-cover shadow-lg opacity-0 transition-opacity duration-500 ease-in-out"
                onLoad={(e) =>
                  (e.target as HTMLImageElement).classList.remove("opacity-0")
                }
              />
            </div>
          </div>

          <div className="w-full text-center">
            <h1 className="text-3xl font-bold mb-2">Dhruv Bansal</h1>
            <hr className="border-t-2 border-foreground mx-auto w-2/3" />
          </div>

          <div className="w-full text-center px-4">
            <p className="text-lg font-bold">
              Hey! I&apos;m studying Computer Science at the University of
              Washington with a deep passion for technology and art. I love
              learning and am always happy to connect with like-minded
              individuals.
            </p>
          </div>
        </div>
      ) : (
        // Desktop/Horizontal Layout
        <div className="flex flex-row justify-between items-center mb-5">
          <div className="w-[37.5%] text-left animate-fade-in-left">
            <label className="text-5xl font-bold">Dhruv Bansal</label>
            <hr className="border-t-2 border-foreground w-11/12 mt-2" />
          </div>

          <div className="w-1/4 flex justify-center items-center">
            <div className="w-full aspect-square relative rounded-full">
              <Image
                src="/dhruv.jpg"
                alt="Dhruv Bansal"
                fill={true}
                className="rounded-full object-cover shadow-lg opacity-0 transition-opacity duration-500 ease-in-out"
                onLoad={(e) =>
                  (e.target as HTMLImageElement).classList.remove("opacity-0")
                }
              />
            </div>
          </div>

          <div className="w-[37.5%] text-right animate-fade-in-right">
            <hr className="border-t-2 border-foreground w-11/12 mb-2 ml-auto" />
            <p className="w-11/12 text-lg text-right ml-auto font-bold">
              Hey! I&apos;m studying Computer Science at the University of
              Washington with a deep passion for technology and art. I love
              learning and am always happy to connect with like-minded
              individuals.
            </p>
          </div>
        </div>
      )}
      <div className="w-full flex justify-center items-center space-x-2">
        <a
          href="https://www.linkedin.com/in/dhvbnl/"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <Linkedin className="icon fill-foreground group-hover:fill-[#0a66c2] transition duration-300" />
        </a>
        <a
          href="https://www.github.com/dhvbnl"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <Github className="icon fill-foreground group-hover:fill-[#2dba4e] transition duration-300" />
        </a>
        <a
          href="https://medium.com/@dhvbnl"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <Medium className="icon fill-foreground group-hover:fill-[#f5c147] transition duration-300" />
        </a>
      </div>
      <div className="w-full flex justify-center items-center mt-5">
        <p className={`text-lg text-center ${isMobile ? "w-full" : "w-7/12"}`}>
          Outside of technology, I love to go on photography walks, driving
          adventures, and try new cafes. I&apos;m always looking for new
          experiences and am excited to see where life takes me next.
          <br />
          <br />
          Previously, I&apos;ve worked at&nbsp;
          <a
            href="https://www.electricera.tech/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            Electric Era&nbsp;
          </a>
          where I worked on control battery system algorithms and web
          development. Currently, I&apos;m working as a Teaching and Research
          Assistant under the&nbsp;
          <a
            href="https://www.cs.washington.edu/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            Allen School
          </a>
          . This summer, I&apos;m interning at&nbsp;
          <a
            href="https://www.apple.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            🍎
          </a>
          .
        </p>
      </div>
    </div>
  );
}
