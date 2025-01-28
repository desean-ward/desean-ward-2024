"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { GlobeDemo } from "./grid-globe.ui";
import animationData from "../../../data/confetti.json";
import MagicButton from "./magic-button.ui";
import { IoCopyOutline } from "react-icons/io5";
import Lottie from "lottie-react";

import dynamic from "next/dynamic";

// Dynamic Imports
// const Lottie = dynamic(
//   () => import("lottie-react").then((mod) => mod.Lottie),
//   {
//     ssr: false, // Prevent server-side rendering
//   }
// );

const BackgroundGradientAnimation = dynamic(
  () =>
    import("./gradient-bg.ui").then((mod) => mod.BackgroundGradientAnimation),
  { ssr: false }
);

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  useEffect(() => {
    if (typeof document === "undefined" || typeof window === "undefined")
      return;
  }, []);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  /* State for Lottie */
  const [copied, setCopied] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("dward@desean-ward.me");
    setCopied(true);
    setShowConfetti(true);

    const timeout = setTimeout(() => {
      setShowConfetti(false);
    }, 100);

    return () => clearTimeout(timeout);
  };

  useEffect(() => {
    if (typeof document === "undefined" || typeof window === "undefined")
      return;
  }, []);

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border-white/[0.3] border",
        className
      )}
      style={{
        background: "rgb(4, 7, 29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4, 7, 29, 1) 0%, rgba(59, 59, 68, 1) 26% rgba(93, 108, 111, 1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className='size-full absolute'>
          {/* All Cards */}
          {img && (
            <Image
              src={img}
              alt={img}
              width={`${id === 1 ? 800 : 200}`}
              height={100}
              className={cn(
                imgClassName,
                "object-cover, object-center absolute bottom-0 right-0"
              )}
            />
          )}
        </div>

        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <Image
              src={spareImg}
              alt={spareImg}
              width={100}
              height={100}
              className={"size-full object-cover object-center"}
            />
          )}
        </div>

        {/* Copy Email Background Animation */}
        {id === 6 && <BackgroundGradientAnimation />}
        {/* Content */}
        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          {/* Description */}
          <div className='font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10'>
            {description}

            {/* Title */}
            <div className='font-sans font-bold text-lg  lg:text-3xl max-w-96 z-10'>
              {title}
            </div>
          </div>

          {/* Interactive Globe Animation */}
          <div className='cursor-pointer'>{id === 2 && <GlobeDemo />}</div>

          {/* My Tech Stack */}
          {id === 3 && (
            <div className='flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2'>
              {/* Tech Stack */}
              <div className='flex flex-col gap-3 lg:gap-8'>
                {["Next.js", "Node.js", "TypeScript"].map((item) => (
                  <span
                    key={item}
                    className='py-2 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e] relative '
                  >
                    {item}
                  </span>
                ))}

                <span className='py-4 px-3 rounded-lg text-center bg-[#10132e]' />
              </div>

              <div className='flex flex-col gap-3 lg:gap-8'>
                <span className='py-4 px-3 rounded-lg text-center bg-[#10132e]' />
                {["Express.js", "MongoDb", "GSAP"].map((item) => (
                  <span
                    key={item}
                    className='py-2 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e] relative '
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Confettie Animation */}
          {id === 6 && (
            <div className='mt-5 relative'>
              <div className={`absolute -bottom-3 right-0`}>
                <Lottie
                  autoplay={copied}
                  loop={showConfetti}
                  animationData={animationData}
                  style={{ height: "400px", width: "400px" }}
                />
              </div>

              <MagicButton
                title={copied ? "Email copied" : "Copy my email"}
                icon={<IoCopyOutline />}
                position='left'
                otherClasses='!bg-[#161a31]'
                handleClick={handleCopy}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
