import { dir } from "i18next";
import { Providers } from "./providers"
import Head from "next/head";
import "../../../public/fonts/fonsts.css"



const languages = ["en", "ru"];

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

const RootLayout: React.FC<any> = ({ children, params: { lng } }) => {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body>
      <Head>
          <title>Логин</title>
          <meta name="description" content="вход" />
        </Head>
      <Providers>
        {children}
      </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
