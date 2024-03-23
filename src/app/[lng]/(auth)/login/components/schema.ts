import * as Yup from "yup";

export const validationSchema = Yup.object({
    email: Yup.string().email("Неверный формат электронной почты").required("Email обязателен"),
    password: Yup.string().min(8, "Пароль должен содержать минимум 8 символов").required("Пароль обязателен"),
  });