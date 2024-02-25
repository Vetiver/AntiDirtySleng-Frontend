import { dir } from "i18next";
import { Providers } from "../providers";
import { ChakraProvider } from "@chakra-ui/react";

const languages = ["en", "ru"];

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

const RootLayout: React.FC<any> = ({ children, params: { lng } }) => {

  return (
    <html lang={lng} dir={dir(lng)}>
      <head />
      <body>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
