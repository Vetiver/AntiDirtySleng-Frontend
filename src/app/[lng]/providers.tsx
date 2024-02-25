"use client";

// import ProtectedRoute from "@/HOC/ProtectedRoute";
import theme from "./theme";
import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
      <ChakraProvider theme={theme}>
          {children}
      </ChakraProvider>
  );
};
