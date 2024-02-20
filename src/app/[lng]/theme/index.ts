import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
import { components } from "./components";
import { colors } from "./foundations/colors";
import { fonts } from "./foundations/fonts";

export const UITheme = extendTheme(
  {
    colors,
    fonts,
    components,
  },
  withDefaultColorScheme({ colorScheme: "primary" }),
);
