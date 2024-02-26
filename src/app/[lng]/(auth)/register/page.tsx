'use client'

import React from "react";
import { chakra, Input, FormControl, FormLabel, Text, Heading, Button, Flex } from "@chakra-ui/react";

function Register() {
  return (
    <Flex
      height="100vh"
      align="center"
      justify="center"
    >
      <chakra.form
        width="100%"
        borderRadius="30px"
        background="white"
        maxW="320px"
        display="flex"
        flexDir="column"
        padding="6"
        boxShadow="md"
      >
        <Flex direction="column" gap={3} align="center">
          <Heading color="black" fontWeight={700} fontSize="20px">
            Регистрация
          </Heading>
        </Flex>
        <FormControl isRequired>
          <Input variant="authInput" placeholder="Ваша почта" />
          <FormLabel color="red">Здесь будет сообщение об ошибке</FormLabel>
        </FormControl>
        <Flex mt={6} direction="column">
          <Button
            // isLoading={registerMutation.isLoading}
            type="submit"
            colorScheme="primary"
            fontFamily="Romanivske"
          >
            Создание аккаунта
          </Button>
          <Text color="gray.500" textAlign="center">
            Есть аккаунт?{" "}
            <Text color="primary" fontWeight={600}>
              Войти
            </Text>
          </Text>
        </Flex>
      </chakra.form>
    </Flex>
  );
}

export default Register;
