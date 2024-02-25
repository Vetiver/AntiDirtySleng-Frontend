'use client'
import React from "react";
import AnimatedGradientBackground from "../animationLayout/animationLayout";
import { ChakraProvider, chakra, Input, FormControl, FormLabel, Text, Heading, FormErrorMessage, Button, Flex } from "@chakra-ui/react";

// Ваш импорт компонентов и стилей

function Register() {
  return (
    <div>
      <AnimatedGradientBackground currentRoute={"/register"}>
        <Flex
          height="100vh" 
          align="center" 
          justify="center" 
        >
          <chakra.form
            width="100%"
            background="white"
            maxW="320px"
            display="flex"
            flexDir="column"
            padding="4"
            borderRadius="lg"
            boxShadow="md"
          >
            <Flex direction="column" gap={3} align="center">
              <Heading color="black" size="xl" fontFamily="Romanivske">
                Регистрация
              </Heading>
            </Flex>
            <FormControl isRequired>
              <FormLabel fontFamily="Romanivske" color="primary">Имя</FormLabel>
              <Input placeholder="Введите ваше Имя" />
              <FormErrorMessage>{''}</FormErrorMessage>
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
      </AnimatedGradientBackground>
    </div>
  );
}

export default Register;
