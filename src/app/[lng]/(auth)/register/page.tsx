import React from "react";
import { useTranslation } from "../../i18n";
import FullPage from "./components/FullPage";

async function Register({ params: { lng } }: any) {
  const { t } = await useTranslation(lng, "register");
  const title = t("title");
  const emailPlaceholder = t("emailPlaceholder");
  const namePalaceholder = t("namePalaceholder")
  const passwordPlaceholder = t("passwordPlaceholder");
  const repeatPassPlaceholder = t("repeatPassPlaceholder");
  const register = t("register");
  const acc = t("acc");
  const login = t("login")

  return (
    <FullPage
      title={title}
      emailPlaceholder={emailPlaceholder}
      passwordPlaceholder={passwordPlaceholder}
      repeatPassPlaceholder={repeatPassPlaceholder}
      namePalaceholder={namePalaceholder}
      register={register}
      acc={acc}
      login={login}
      lng={lng}
    />
  );
}

export default Register;
