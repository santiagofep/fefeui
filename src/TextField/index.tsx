import * as React from "react";
import { useState, useEffect } from "react";

import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
} from "@chakra-ui/react";

interface TextFieldProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  type: "text" | "email" | "password";
  helperText?: string;
}

export const TextField: React.FC<TextFieldProps> = ({
  label,
  placeholder,
  value,
  onChange,
  type,
  helperText,
}) => {
  return (
    <FormControl>
      {label && <FormLabel>{label}</FormLabel>}
      <Input
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        type={type}
        placeholder={placeholder}
      />
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};
