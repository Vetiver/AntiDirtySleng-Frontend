import React from "react";
import { useTranslation } from "../../i18n";
import FullPage from "./FullPage";

async function ConfirmRegister({ params: { lng } }: any) {
  const { t } = await useTranslation(lng, "register");
  const title = t("title");
  const emailPlaceholder = t("emailPlaceholder");
  const passwordPlaceholder = t("passwordPlaceholder");
  const login = t("login");
  const acc = t("acc");

  return (
      <FullPage/>
  );
}

export default ConfirmRegister;
