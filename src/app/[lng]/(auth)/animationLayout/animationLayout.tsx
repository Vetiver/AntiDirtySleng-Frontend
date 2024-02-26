"use client"
import { ReactNode, useEffect } from "react";
import { chakra, useColorModeValue } from "@chakra-ui/react";
import { motion } from 'framer-motion';
import { usePathname } from "next/navigation";

interface AnimatedGradientBackgroundProps {
  children?: ReactNode;
}

const ChakraMotionDiv = chakra(motion.div, {
  shouldForwardProp: (prop) => prop !== "layout" && prop !== "layoutRoot", 
});

const backgroundColors: Record<string, string> = {
  login: "linear-gradient(180deg, #1e78e2 0%, #102c50 100%)",
  register: "linear-gradient(180deg, #102c50 0%, #000 100%)",
};

const AnimatedGradientBackground: React.FC<AnimatedGradientBackgroundProps> = ({
  children,
}) => {
  const currentRoute = typeof window !== 'undefined' ? usePathname() : '';
  const variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.5 } },
  };

  const bgColor = useColorModeValue(
    currentRoute === "/ru/login" || currentRoute === "/en/login" ? backgroundColors.login : backgroundColors.register,
    currentRoute === "/ru/login" || currentRoute === "/en/login" ? backgroundColors.login : backgroundColors.register
  );
  

  useEffect(() => {
    document.body.style.background = bgColor;

    return () => {
      document.body.style.background = "";
    };
  }, [currentRoute, bgColor]);

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
