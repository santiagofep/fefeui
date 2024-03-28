import * as React from "react";
import { useState, useEffect } from "react";

import { TextFieldButton } from "../TextFieldButton";
import {
  HStack,
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  FormHelperText,
  FormControl,
  VStack,
  Skeleton,
} from "@chakra-ui/react";
import { MdClose } from "react-icons/md";

interface ChipInputProps {
  label: string;
  buttonLabel: string;
  isLoading?: boolean;
  placeholder?: string;
  values: string[];
  onAdd: (value: string) => void;
  onRemove: (value: string) => void;
  tagIcon?: React.ElementType;
  helperText?: string;
  isSkeleton?: boolean;
}

export const ChipInput: React.FC<ChipInputProps> = ({
  label,
  buttonLabel,
  isLoading,
  placeholder,
  values,
  onAdd,
  onRemove,
  tagIcon,
  helperText,
  isSkeleton,
}) => {
  return (
    <Skeleton isLoaded={!isSkeleton}>
      <FormControl>
        <TextFieldButton
          label={label}
          buttonLabel={buttonLabel}
          isLoading={isLoading}
          placeholder={placeholder}
          onSubmit={(value) => onAdd(value)}
        />
        <HStack marginY={3} flexWrap={"wrap"}>
          {values.map((value: string, index) => {
            return (
              <Tag key={index} size="lg">
                {tagIcon && <TagLeftIcon as={tagIcon} />}
                <TagLabel>{value}</TagLabel>
                <TagRightIcon
                  as={MdClose}
                  onClick={() => onRemove(value)}
                  cursor={"pointer"}
                />
              </Tag>
            );
          })}
        </HStack>
        {helperText && (
          <FormHelperText marginY={"0"}>{helperText}</FormHelperText>
        )}
      </FormControl>
    </Skeleton>
  );
};
