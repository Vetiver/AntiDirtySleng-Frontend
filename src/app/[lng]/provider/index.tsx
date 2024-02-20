import { ChakraBaseProvider, ChakraProviderProps } from "@chakra-ui/react";
import { UITheme } from "../theme";

export interface UIThemeProviderProps
  extends Omit<ChakraProviderProps, "theme"> {}

export const UIThemeProvider = (props: UIThemeProviderProps) => {
  return <ChakraBaseProvider theme={UITheme} {...props} />;
};
