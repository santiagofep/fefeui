import * as React from "react";
import { useState, useEffect } from "react";

import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Skeleton,
} from "@chakra-ui/react";

interface TextFieldProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  type: "text" | "email" | "password";
  helperText?: string;
  isSkeleton?: boolean;
  required?: boolean;
}

export const TextField: React.FC<TextFieldProps> = ({
  label,
  placeholder,
  value,
  onChange,
  type,
  helperText,
  isSkeleton,
  required,
}) => {
  return (
    <Skeleton isLoaded={!isSkeleton}>
      <FormControl>
        {label && <FormLabel>{label}</FormLabel>}
        <Input
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
          }}
          type={type}
          placeholder={placeholder}
          required={required}
        />
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    </Skeleton>
  );
};
