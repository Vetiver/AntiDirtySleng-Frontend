"use client";
import { useSearchParams } from "next/navigation";
import { registerRequest } from "@/api/auth/auth";
import React, { useEffect } from "react";

const FullPage: React.FC<any> = ({
  lng,
  title,
  emailPlaceholder,
  passwordPlaceholder,
  acc,
  login,
}) => {
  const searchParams = useSearchParams();
  const register = async (accessToken: any) => {
    try {
      const response = await registerRequest(accessToken);
      if (response.ok) {
        // Регистрация успешна
      } else {
        // Регистрация не удалась
        // Здесь можно обработать ошибку, например, отобразить сообщение об ошибке
      }
    } catch (error) {
      // Здесь можно обработать ошибку, например, отобразить сообщение об ошибке
    }
  };
  useEffect(() => {
    const accessToken = searchParams.get("code") || "";
      register(accessToken);
  }, [searchParams]);
  return <></>;
};

export default FullPage;
