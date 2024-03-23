import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const buttonTheme = defineStyleConfig({
  variants: {
    solid: defineStyle(({ colorScheme }) => ({
      bg: `${colorScheme}.500`,
      color: "white",
      _hover: {
        bg: `${colorScheme}.500`,
        opacity: 0.8,
        _disabled: {
          bg: `${colorScheme}.500`,
        },
      },
      _active: {
        bg: `${colorScheme}.500`,
        opacity: 0.7,
      },
      _disabled: {
        opacity: 0.7,
      },
    })),
    outline: {
      bg: "transparent",
      color: "white",
      borderColor: "border",
      _hover: {
        bg: "transparent",
        opacity: 0.8,
      },
      _active: {
        bg: "transparent",
        opacity: 0.7,
      },
    },
  },
  sizes: {
    md: defineStyle({
      h: "36px",
      minW: "10",
      fontSize: "12px",
      px: "4",
      rounded: "30px",
      lineHeight: "5",
      fontStyle: "normal",
    }),
  },
});


export default buttonTheme;