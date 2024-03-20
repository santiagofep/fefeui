import * as React from "react";
import { useState, useEffect } from "react";

import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Button,
} from "@chakra-ui/react";

interface TextFieldButtonProps {
  label: string;
  buttonLabel: string;
  onSubmit: (value: string) => void;
  isLoading?: boolean;
  placeholder?: string;
}

export const TextFieldButton: React.FC<TextFieldButtonProps> = ({
  label,
  buttonLabel,
  onSubmit,
  isLoading,
  placeholder,
}) => {
  const [value, setValue] = useState<string>("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setValue("");
        onSubmit(value);
      }}
    >
      <Flex>
        <FormControl>
          <FormLabel>{label}</FormLabel>
          <InputGroup>
            <Input
              value={value}
              required
              placeholder={placeholder}
              onChange={(e) => setValue(e.target.value)}
            />
            <Button isLoading={isLoading} type="submit" ml={"0.5rem"}>
              {buttonLabel}
            </Button>
          </InputGroup>
        </FormControl>
      </Flex>
    </form>
  );
};
