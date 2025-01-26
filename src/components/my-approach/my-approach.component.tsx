/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal.ui";
import {
  CardContainer,
  CardDescription,
  CardIcon,
  CardTitle,
  IconButton,
  IconButtonBorder,
  IconButtonContent,
  MyApproachContainer,
  MyApproachWrapper,
} from "./my-approach.styles";

const MyApproach = () => {
    useEffect(() => {
      if (typeof document === "undefined") return;
    }, []);
  
  return (
    <MyApproachWrapper>
      <h1 className='heading'>
        My <span className='text-purple'>approach</span>
      </h1>
      <MyApproachContainer>
        <Card
          title='Planning & Strategy'
          icon={<AceternityIcon order='Phase 1' />}
          description="We'll collaborate to map out your website's goals, target audience, and key functionalities. We'll discuss things like site structure, navigation, and content requirements."
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName='bg-emerald-900'
          />
        </Card>

        {/* Card 2 */}
        <Card
          title='Development & Progress Update'
          icon={<AceternityIcon order='Phase 2' />}
          description='Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way.'
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName='bg-black'
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          {/* Radial gradient for the cute fade */}
          <div className='absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90' />
        </Card>

        {/* Card 3 */}
        <Card
          title='Development & Launch'
          icon={<AceternityIcon order='Phase 3' />}
          description="This is where the magic happens! Based on the approved design, I'll translate everything into functional code, building your website from the ground up."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName='bg-sky-600'
            colors={[[125, 211, 252]]}
          />
        </Card>
      </MyApproachContainer>
    </MyApproachWrapper>
  );
};

const Card = ({
  title,
  icon,
  children,
  description,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  description: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <CardContainer
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Icon className='absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black' />

      <Icon className='absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black' />

      <Icon className='absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black' />

      <Icon className='absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black' />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='h-full w-full absolute inset-0'
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Card Content */}
      <div className='relative z-20'>
        {/* Icon */}
        <CardIcon>{icon}</CardIcon>

        {/* Title */}
        <CardTitle>{title}</CardTitle>

        {/* Description */}
        <CardDescription style={{ color: "#e4ecff" }}>
          {description}
        </CardDescription>
      </div>
    </CardContainer>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      <IconButton>
        {/* Animated Border */}
        <IconButtonBorder />

        {/* Content */}
        <IconButtonContent>{order}</IconButtonContent>
      </IconButton>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth='1.5'
      stroke='currentColor'
      className={className}
      {...rest}
    >
      <path strokeLinecap='round' strokeLinejoin='round' d='M12 6v12m6-6H6' />
    </svg>
  );
};

export default MyApproach;
