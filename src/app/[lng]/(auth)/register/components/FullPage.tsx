"use client";
import React, {useState} from "react";
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
import {sendMailRequest} from "@/api/auth/auth"
import ConfirmModal from "./ConfirmModal"

interface RegisterParams {
  lng: any;
  title: string;
  emailPlaceholder: string;
  passwordPlaceholder: string;
  repeatPassPlaceholder: string;
  register: string;
  acc: string;
  login: string;
  namePalaceholder: string;
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
  namePalaceholder,
}) => {
  const [modal, setModal] = useState(false)
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      password: "",
      repeatPassword: "",
    },
    validationSchema,
    onSubmit: (values) => {
      sendMailRequest({
        email: values.email,
        name: values.name,
        password: values.password,
      })
      .then((res) => {
        if(res) {
          setModal(true)
          console.log(res.json())
        }
      })
    },
  });
  return (
    <AnimatedGradientBackground
      bgColor={"linear-gradient(180deg, #102c50 0%, #000 100%)"}
    >
      <ConfirmModal isOpen={modal} onClose={() => setModal(false)} />
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
                  placeholder={emailPlaceholder}
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl
                isRequired
                isInvalid={formik.touched.name && formik.errors.name != ""}
              >
                <Input
                  fontFamily={"Romanivske"}
                  placeholder={namePalaceholder}
                  name="name"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
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
              <FormControl
                isRequired
                isInvalid={
                  formik.touched.repeatPassword &&
                  formik.errors.repeatPassword != ""
                }
              >
                <PasswordInput
                  placeholder={repeatPassPlaceholder}
                  name="repeatPassword"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.repeatPassword}
                />
                <FormErrorMessage>
                  {formik.errors.repeatPassword}
                </FormErrorMessage>
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
          <Link style={{ width: "100%" }} href={`/${lng}/login`}>
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
