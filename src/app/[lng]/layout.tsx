import { dir } from "i18next";
import { Providers } from "./providers";
import "./globals.css";

const languages = ["en", "ru"];

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

const RootLayout: React.FC<any> = ({ children, params: { lng } }) => {
  return (
    <html lang={lng} dir={dir(lng)}>
      <head />
      <body>
      <Providers>
        {children}
      </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
