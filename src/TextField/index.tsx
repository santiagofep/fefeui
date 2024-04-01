import * as React from "react";
import { useState, useEffect } from "react";

import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Skeleton,
  InputProps,
} from "@chakra-ui/react";

interface TextFieldProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  type: InputProps["type"];
  helperText?: string;
  isSkeleton?: boolean;
  required?: boolean;
  isInvalid?: boolean;
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
  isInvalid,
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
          isInvalid={isInvalid}
        />
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    </Skeleton>
  );
};
