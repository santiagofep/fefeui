import * as React from "react";
import { useState, useEffect } from "react";

import {
  Select as ChakraSelect,
  FormControl,
  FormLabel,
  FormHelperText,
  FormControlProps,
  Skeleton,
} from "@chakra-ui/react";

interface SelectProps {
  label?: string;
  options: { value: string; label: string; isDisabled?: boolean }[];
  value: string;
  helperText?: string;
  onChange: (newValue: string) => void;
  isInvalid?: boolean;
  emptyOption?: string;
  normalizeLabelSeparator?: string;
  isSkeleton?: boolean;
}

export const Select: React.FC<SelectProps> = ({
  label,
  options,
  value,
  helperText,
  onChange,
  isInvalid,
  emptyOption,
  normalizeLabelSeparator,
  isSkeleton,
}) => {
  const [useMonospace, setUseMonospace] = useState(false);

  const normalizedOptions = React.useMemo(() => {
    if (normalizeLabelSeparator) {
      setUseMonospace(true);
      return normalizeStringsinObjectArray(
        [...options],
        "label",
        normalizeLabelSeparator
      );
    }
    return options;
  }, [options]);

  return (
    <Skeleton isLoaded={!isSkeleton}>
      <FormControl isInvalid={isInvalid}>
        {label && <FormLabel>{label}</FormLabel>}
        <ChakraSelect
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
          }}
        >
          {emptyOption && <option value="">{emptyOption}</option>}
          {normalizedOptions.map((option: any, index: number) => {
            return (
              <option
                value={option.value}
                key={index}
                disabled={option.isDisabled}
                style={{
                  fontFamily: useMonospace ? "monospace" : "inherit",
                }}
              >
                {option.label}
              </option>
            );
          })}
        </ChakraSelect>
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    </Skeleton>
  );
};

const normalizeStringsinObjectArray = (
  objectArray: Object[],
  key: string,
  separator: string = "|"
) => {
  let maxLength = [];
  for (let i = 0; i < objectArray.length; i++) {
    // @ts-ignore
    const item = objectArray[i][key];
    const itemParts = item.split(separator);
    for (let j = 0; j < itemParts.length; j++) {
      if (maxLength[j] === undefined) {
        maxLength[j] = 0;
      }
      maxLength[j] = Math.max(maxLength[j], itemParts[j].length);
    }
  }
  for (let i = 0; i < objectArray.length; i++) {
    // @ts-ignore
    const item = objectArray[i][key];
    const itemParts = item.split(separator);

    for (let j = 0; j < itemParts.length; j++) {
      itemParts[j] = itemParts[j].padEnd(maxLength[j], ".");
    }
    let newItem = itemParts.join(separator);
    // @ts-ignore
    objectArray[i][key] = newItem;
  }
  return objectArray;
};
