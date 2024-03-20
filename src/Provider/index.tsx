import * as React from "react";
import { useState, useEffect } from "react";

import { ChakraProvider, ChakraProviderProps } from "@chakra-ui/react";
import { theme } from "../chakraTheme";

export const Provider: React.FC<ChakraProviderProps> = ({
  children,
  ...props
}) => {
  return (
    <ChakraProvider theme={theme} {...props}>
      {children}
    </ChakraProvider>
  );
};
