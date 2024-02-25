"use client"
import { ReactNode, useEffect } from "react";
import { chakra, useColorModeValue } from "@chakra-ui/react";
import { motion } from 'framer-motion';

interface AnimatedGradientBackgroundProps {
  currentRoute: string;
  children?: ReactNode;
}

const ChakraMotionDiv = chakra(motion.div, {
  shouldForwardProp: (prop) => prop !== "layout" && prop !== "layoutRoot", // Используем не все пропсы для motion.div
});

// Определение цветов фона
const backgroundColors: Record<string, string> = {
  login: "linear-gradient(180deg, #1e78e2 0%, #102c50 100%)",
  register: "linear-gradient(180deg, #102c50 0%, #000 100%)",
};

// Определение компонента AnimatedGradientBackground
const AnimatedGradientBackground: React.FC<AnimatedGradientBackgroundProps> = ({
  currentRoute,
  children,
}) => {
  const variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.5 } },
  };

  // Использование Chakra UI для получения цвета фона в зависимости от текущего маршрута
  const bgColor = useColorModeValue(
    currentRoute === "/login" ? backgroundColors.login : backgroundColors.register,
    currentRoute === "/login" ? backgroundColors.login : backgroundColors.register
  );

  useEffect(() => {
    // Изменение фона всего body в зависимости от текущего маршрута
    document.body.style.background = bgColor;

    return () => {
      // Сброс фона body при размонтировании компонента
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
        background: bgColor, // Использование определенного цвета фона
      }}
    >
      {children}
    </ChakraMotionDiv>
  );
};

export default AnimatedGradientBackground;
