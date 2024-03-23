import * as Yup from "yup";

export const validationSchema = Yup.object({
    email: Yup.string().email("Неверный формат электронной почты").required("Email обязателен"),
    name: Yup.string().required("Имя обязательно"),
    password: Yup.string().min(8, "Пароль должен содержать минимум 8 символов").required("Пароль обязателен"),
    repeatPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Пароли должны совпадать")
      .required("Повторите пароль")
      .nullable(),
  });