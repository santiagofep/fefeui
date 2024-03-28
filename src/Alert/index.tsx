import * as React from "react";
import { useState, useEffect } from "react";

import {
  Alert as ChakraAlert,
  AlertProps as ChakraAlertProps,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  ButtonProps,
  Box,
  Button,
} from "@chakra-ui/react";

interface AlertProps {
  title: string;
  description?: string;
  status: ChakraAlertProps["status"];
  button?: ButtonProps;
}

export const Alert: React.FC<AlertProps> = ({
  title,
  description,
  button,
  status = "info",
}) => {
  if (button) {
    return (
      <ChakraAlert status={status} justifyContent={"space-between"}>
        <Box display={"flex"} alignItems="center">
          <AlertIcon />
          <Box>
            <AlertTitle>{title}</AlertTitle>
            <AlertDescription fontSize={"small"}>
              {description}
            </AlertDescription>
          </Box>
        </Box>
        {button && (
          <Box>
            <Button {...button} />
          </Box>
        )}
      </ChakraAlert>
    );
  } else {
    return (
      <ChakraAlert status={status}>
        <AlertIcon />
        <AlertTitle mr={2}>{title}</AlertTitle>
        {description && <AlertDescription>{description}</AlertDescription>}
      </ChakraAlert>
    );
  }
};
