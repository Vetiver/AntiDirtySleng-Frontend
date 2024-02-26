import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const baseStyleDialog = defineStyle({
  _dark: {
    bg: "brand.700",
  },
});

const modalTheme = defineStyleConfig({
  baseStyle: {
    dialog: baseStyleDialog,
  },
});

export default modalTheme;
