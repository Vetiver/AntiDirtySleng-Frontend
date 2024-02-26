import {
  Flex,
  chakra,
  Heading
} from "@chakra-ui/react";
import React, { ReactNode } from "react";
import Image from "next/image";

interface BaseFormProps {
  title: string;
  children: ReactNode;
}

const BaseForm: React.FC<BaseFormProps> = ({ title, children }) => {
  return (
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
        <Flex direction="column" gap={3.5} align="center">
          <Image src="/logo-min.svg" alt="logo" width={50} height={50} />
          <Heading color="black" fontWeight={700} fontSize="20px">
            {title}
          </Heading>
        </Flex>
        {children}
      </chakra.form>
  );
};

export default BaseForm;
