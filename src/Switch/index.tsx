import * as React from "react";
import { useState, useEffect } from "react";

import {
  FormControl,
  FormLabel,
  Switch as ChakraSwitch,
  Flex,
  FormHelperText,
} from "@chakra-ui/react";
import { HelperText } from "../Select/Select.stories";

interface SwitchProps {
  label: string;
  checked: boolean;
  onChange: (newValue) => void;
  helperText?: string;
}

export const Switch: React.FC<SwitchProps> = ({
  label,
  checked,
  onChange,
  helperText,
}) => {
  return (
    <FormControl>
      <Flex alignItems={"center"}>
        <ChakraSwitch
          checked={checked}
          onChange={() => {
            onChange(!checked);
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
