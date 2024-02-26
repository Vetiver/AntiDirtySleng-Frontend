import { extendTheme } from "@chakra-ui/react";
import components from "./components";
import config from "./config";
import semanticTokens from "./foundations/colors";
import fonts from "./foundations/fonts";
import styles from "./styles";

const theme = extendTheme({
  config,
  styles,
  semanticTokens,
  components,
  fonts,
});

export default theme;