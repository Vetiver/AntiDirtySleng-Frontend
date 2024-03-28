"use client";

import { Flex, Box } from "@chakra-ui/react";
import { Heading } from "lucide-react";
import { title } from "process";



const FullPage: React.FC<any> = ({

}) => {
 
  return (
    <Box  width="100%"
    borderRadius="30px"
    background="white"
    maxW="320px"
    display="flex"
    flexDir="column"
    padding="6"
    boxShadow="md">
      <Flex
      direction="column" gap={3.5} align="center"
      >
        <Heading color="black" fontWeight={700} fontSize="20px">
          текст
        </Heading>
      </Flex>
    </Box>
  );
};

export default FullPage;
