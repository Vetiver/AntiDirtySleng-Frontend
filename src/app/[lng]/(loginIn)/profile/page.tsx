import React from "react";
// import FullPage from "./components/FullPage";
import { useTranslation } from "../../i18n";
import {
  Text,

} from "@chakra-ui/react";
import FullPage from "./components/Fullpage";

async function Profile({ params: { lng } }: any) {
  const { t } = await useTranslation(lng, "login");
  const title = t("title");
  const emailPlaceholder = t("emailPlaceholder");
  const passwordPlaceholder = t("passwordPlaceholder");
  const login = t("login");
  const signUp = t("signup");
  const acc = t("acc");
  return (
    <FullPage />
  );
}

export default Profile;