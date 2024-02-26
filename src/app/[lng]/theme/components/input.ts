import { cssVar, defineStyle, defineStyleConfig } from "@chakra-ui/react";

const $height = cssVar("input-height");

const outlineVariant = defineStyle({
  field: {
    bg: "background",
    height: $height.reference,
    rounded: "lg",
    borderColor: "border",
    color: "gray.500",
    _focusVisible: {
      boxShadow: "none",
    },
    _hover: {
      opacity: 0.9,
    },
    _invalid: {
      boxShadow: "none",
      _focus: {
        borderColor: "danger",
      },
    },
  },
});

const inputTheme = defineStyleConfig({
  variants: {
    outline: outlineVariant,
  },
  sizes: {
    md: defineStyle({
      field: {
        [$height.variable]: "44px",
      },
    }),
  },
  defaultProps: {
    focusBorderColor: "border",
  } as any,
});

export default inputTheme;
