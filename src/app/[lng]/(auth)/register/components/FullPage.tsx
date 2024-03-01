"use client";
import React from "react";
import {
  Input,
  FormControl,
  Button,
  Flex,
  Text,
  chakra,
  FormErrorMessage,
} from "@chakra-ui/react";
import Link from "next/link";
import AnimatedGradientBackground from "../../components/animationLayout";
import BaseForm from "../../components/baseForm";
import PasswordInput from "../../components/passwordInput";
import { useFormik } from "formik";
import { validationSchema } from "./schema";

interface RegisterParams {
  lng: any;
  title: string;
  emailPlaceholder: string;
  passwordPlaceholder: string;
  repeatPassPlaceholder: string;
  register: string;
  acc: string;
  login: string;
}

const FullPage: React.FC<RegisterParams> = ({
  lng,
  title,
  emailPlaceholder,
  passwordPlaceholder,
  repeatPassPlaceholder,
  register,
  acc,
  login,
}) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      repeatPassword: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Форма отправлена с значениями:", values);
    },
  });
  return (
    <AnimatedGradientBackground bgColor={"linear-gradient(180deg, #102c50 0%, #000 100%)"}>
      <Flex
        height="100vh"
        direction="column"
        gap="29px"
        align="center"
        justify="center"
      >
        <BaseForm title={title}>
          <chakra.form onSubmit={formik.handleSubmit}>
            <Flex mt="20px" direction="column" align="center" gap={3.5}>
              <FormControl isRequired isInvalid={formik.touched.email && formik.errors.email != ""}>
                <Input
                  fontFamily={"Romanivske"}
                  placeholder={emailPlaceholder}
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl isRequired isInvalid={formik.touched.password && formik.errors.password != ""}>
                <PasswordInput
                  placeholder={passwordPlaceholder}
                  name="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
              </FormControl>
              <FormControl isRequired isInvalid={formik.touched.repeatPassword && formik.errors.repeatPassword != ""}>
                <PasswordInput
                  placeholder={repeatPassPlaceholder}
                  name="repeatPassword"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.repeatPassword}
                />
                <FormErrorMessage>{formik.errors.repeatPassword}</FormErrorMessage>
              </FormControl>
            </Flex>
            <Flex mt={6} direction="column">
              <Button
                type="submit"
                backgroundColor={"black"}
                fontFamily="Romanivske"
                onClick={() => formik.handleSubmit}
              >
                {register}
              </Button>
            </Flex>
          </chakra.form>
        </BaseForm>
        {/* ... */}
      </Flex>
    </AnimatedGradientBackground>
  );
};

export default FullPage;
