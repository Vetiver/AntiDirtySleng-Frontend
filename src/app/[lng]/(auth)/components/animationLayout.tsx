"use client"
import { ReactNode } from "react";
import { chakra } from "@chakra-ui/react";
import { motion } from 'framer-motion';


interface AnimatedGradientBackgroundProps {
  children?: ReactNode;
  bgColor: any;
}

const ChakraMotionDiv = chakra(motion.div, {
  shouldForwardProp: (prop) => prop !== "layout" && prop !== "layoutRoot", 
});

const AnimatedGradientBackground: React.FC<AnimatedGradientBackgroundProps> = ({
  children,
  bgColor
}) => {
  const variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.5 } },
  };

  return (
    <ChakraMotionDiv
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      style={{
        background: bgColor, 
      }}
    >
      {children}
    </ChakraMotionDiv>
  );
};

export default AnimatedGradientBackground;
