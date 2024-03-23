import React from "react";
import FullPage from "./components/FullPage";
import { useTranslation } from "../../i18n";

async function Login({ params: { lng } }: any) {
  const { t } = await useTranslation(lng, "login");
  const title = t("title");
  const emailPlaceholder = t("emailPlaceholder");
  const passwordPlaceholder = t("passwordPlaceholder");
  const login = t("login");
  const signUp = t("signup");
  const acc = t("acc");
  return (
    <FullPage
      title={title}
      emailPlaceholder={emailPlaceholder}
      passwordPlaceholder={passwordPlaceholder}
      login={login}
      acc={acc}
      lng={lng}
      signUp={signUp}
        />
  );
}

export default Login;
