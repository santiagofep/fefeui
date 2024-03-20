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

const TextFieldButton: React.FC<TextFieldButtonProps> = ({
  label,
  buttonLabel,
  onSubmit,
  isLoading,
  placeholder,
}) => {
  const [value, setValue] = useState<string>("");
  return (
    <Flex>
      <FormControl>
        <FormLabel>{label}</FormLabel>
        <InputGroup>
          <Input
            placeholder={placeholder}
            onChange={(e) => setValue(e.target.value)}
          />
          <Button
            isLoading={isLoading}
            onClick={() => onSubmit(value)}
            ml={"0.5rem"}
          >
            {buttonLabel}
          </Button>
        </InputGroup>
      </FormControl>
    </Flex>
  );
};

export default TextFieldButton;
