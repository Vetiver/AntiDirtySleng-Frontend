import { dir } from "i18next";
import { UIThemeProvider } from "./provider";

const languages = ["en", "ru"];

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

const RootLayout: React.FC<any> = ({ children, params: { lng } }) => {
  return (
    <html lang={lng} dir={dir(lng)}>
      <head />
      <body>
        <UIThemeProvider>{children}</UIThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
