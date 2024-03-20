import * as React from "react";
import { useState, useEffect } from "react";

import {
  Select as ChakraSelect,
  FormControl,
  FormLabel,
  FormHelperText,
  FormControlProps,
} from "@chakra-ui/react";

interface SelectProps {
  label?: string;
  options: { value: string; label: string }[];
  value: string;
  helperText?: string;
  onChange: (newValue: string) => void;
  isInvalid?: boolean;
  emptyOption?: string;
}

export const Select: React.FC<SelectProps> = ({
  label,
  options,
  value,
  helperText,
  onChange,
  isInvalid,
  emptyOption,
}) => {
  return (
    <FormControl isInvalid={isInvalid}>
      {label && <FormLabel>{label}</FormLabel>}
      <ChakraSelect
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      >
        {emptyOption && <option value="">{emptyOption}</option>}
        {options.map((option, index) => {
          return (
            <option value={option.value} key={index}>
              {option.label}
            </option>
          );
        })}
      </ChakraSelect>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};
