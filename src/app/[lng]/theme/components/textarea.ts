import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const outlineVariant = defineStyle({
  bg: "gray.50",
  _dark: {
    bg: "brand.600",
  },
});

const textareaTheme = defineStyleConfig({
  variants: {
    outline: outlineVariant,
  },
  defaultProps: {
    focusBorderColor: "purple.400",
  } as any,
});

export default textareaTheme;
