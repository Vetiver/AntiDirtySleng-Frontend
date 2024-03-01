"use client";
import React from "react";
import {
  Input,
  FormControl,
  Button,
  Flex,
  Text,
  chakra,
} from "@chakra-ui/react";
import Link from "next/link";
import AnimatedGradientBackground from "../components/animationLayout";
import BaseForm from "../components/baseForm";
import PasswordInput from "../components/passwordInput";

interface RegisterParams {
  params: any;
}

const Login: React.FC<RegisterParams> = ({ params: { lng } }) => {
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
        <BaseForm title="Вход">
          <chakra.form>
            <Flex mt="20px" direction="column" align="center" gap={3.5}>
              <FormControl isRequired>
                <Input fontFamily={"Romanivske"} placeholder="Ваша почта" />
              </FormControl>
              <FormControl isRequired>
                {/* <PasswordInput placeholder="Пароль" /> */}
              </FormControl>
            </Flex>
            <Flex mt={6} direction="column">
              <Button
                type="submit"
                backgroundColor={"black"}
                fontFamily="Romanivske"
              >
                Войти
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
          <Text>Нет Аккаунта?</Text>
          <Link style={{ width: "100%" }} href={`/${lng}/register`}>
            <Button
              width="100%"
              type="submit"
              backgroundColor={"black"}
              fontFamily="Romanivske"
            >
              Зарегистрироваться
            </Button>
          </Link>
        </Flex>
      </Flex>
    </AnimatedGradientBackground>
  );
};

export default Login;
