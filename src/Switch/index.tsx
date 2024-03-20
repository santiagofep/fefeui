import * as React from "react";
import { useState, useEffect } from "react";

import {
  FormControl,
  FormLabel,
  Switch as ChakraSwitch,
  Flex,
  FormHelperText,
} from "@chakra-ui/react";

interface SwitchProps {
  label: string;
  isChecked: boolean;
  onChange: (newValue: boolean) => void;
  helperText?: string;
}

export const Switch: React.FC<SwitchProps> = ({
  label,
  isChecked,
  onChange,
  helperText,
}) => {
  return (
    <FormControl>
      <Flex alignItems={"center"}>
        <ChakraSwitch
          isChecked={isChecked}
          onChange={() => {
            onChange(!isChecked);
          }}
        />
        {label && (
          <FormLabel marginLeft={"0.5rem"} marginY="0">
            {label}
          </FormLabel>
        )}
      </Flex>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};
