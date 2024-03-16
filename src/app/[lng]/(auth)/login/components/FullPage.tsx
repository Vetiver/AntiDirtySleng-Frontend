"use client";
import {
  Flex,
  chakra,
  FormControl,
  Input,
  Button,
  Text,
  FormErrorMessage,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import AnimatedGradientBackground from "../../components/animationLayout";
import BaseForm from "../../components/baseForm";
import PasswordInput from "../../components/passwordInput";
import { useFormik } from "formik";
import { validationSchema } from "./schema";

interface LoginParams {
  lng: any;
  title: string;
  emailPlaceholder: string;
  passwordPlaceholder: string;
  acc: string;
  login: string;
}

const FullPage: React.FC<LoginParams> = ({
  lng,
  title,
  emailPlaceholder,
  passwordPlaceholder,
  acc,
  login,
}) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Форма отправлена с значениями:", values);
    },
  });
  return (
    <AnimatedGradientBackground
      bgColor={"linear-gradient(180deg, #1e78e2 0%, #102c50 100%)"}
    >
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
              <FormControl
                isRequired
                isInvalid={formik.touched.email && formik.errors.email != ""}
              >
                <Input
                  fontFamily={"Romanivske"}
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  placeholder={emailPlaceholder}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl
                isRequired
                isInvalid={
                  formik.touched.password && formik.errors.password != ""
                }
              >
                <PasswordInput
                  placeholder={passwordPlaceholder}
                  name="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
              </FormControl>
            </Flex>
            <Flex mt={6} direction="column">
              <Button
                type="submit"
                backgroundColor={"black"}
                fontFamily="Romanivske"
              >
                {login}
              </Button>
            </Flex>
          </chakra.form>
        </BaseForm>
        <Flex
          align="center"
          direction="column"
          width="100%"
          borderRadius="30px"
          background="white"
          maxW="320px"
          display="flex"
          flexDir="column"
          padding="6"
          boxShadow="md"
          gap="13px"
        >
          <Text>{acc}</Text>
          <Link style={{ width: "100%" }} href={`/${lng}/register`}>
            <Button
              width="100%"
              type="submit"
              backgroundColor={"black"}
              fontFamily="Romanivske"
            >
              {login}
            </Button>
          </Link>
        </Flex>
      </Flex>
    </AnimatedGradientBackground>
  );
};

export default FullPage;
