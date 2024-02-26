import { cssVar, defineStyle, defineStyleConfig } from "@chakra-ui/react";

const $height = cssVar("input-height");

const outlineVariant = defineStyle({
  field: {
    fontFamily: "Romanivske",
    bg: "background",
    height: $height.reference,
    rounded: "30px",
    border: "0",
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
  text: {
    fontFamily: "Romanivske",
    fontSize: "13px",
    lineHeight: "138%",
    fontWeight: 300,
    color: "#6e727b",
  },
  placeholder: {
    fontFamily: "Romanivske",
    fontSize: "13px",
    lineHeight: "138%",
    fontWeight: 300,
    color: "#6e727b",
  },
});

const inputTheme = defineStyleConfig({
  variants: {
    outline: outlineVariant,
  },
  sizes: {
    md: defineStyle({
      field: {
        [$height.variable]: "36px",
      },
    }),
  },
  defaultProps: {
    focusBorderColor: "border",
  } as any,
});

export default inputTheme;
