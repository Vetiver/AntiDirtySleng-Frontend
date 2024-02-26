import { dir } from "i18next";
import AnimatedGradientBackground from "./animationLayout/animationLayout";
import { Providers } from "../providers";

const languages = ["en", "ru"];

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

const RootLayout: React.FC<any> = ({ children, params: { lng } }) => {

  return (
    <html lang={lng} dir={dir(lng)}>
      <body>
        <AnimatedGradientBackground>
          {children}
        </AnimatedGradientBackground>
      </body>
    </html>
  );
};

export default RootLayout;
