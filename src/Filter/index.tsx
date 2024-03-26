import * as React from "react";
import { useState, useEffect } from "react";

import {
  Box,
  FormControl,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputRightAddon,
  VStack,
} from "@chakra-ui/react";

import { MdSearch } from "react-icons/md";

import { pathWithSearch } from "../utils";

import { Select } from "../index";

interface FilterProps {
  showSearch?: boolean;
  options?: {
    label: string;
    key: string;
    values?: {
      label: string;
      value: string;
    }[];
    type: "select" | "date";
  }[];
  initialPath: string;
  onChange: (filter: string) => void;
}

export const Filter: React.FC<FilterProps> = ({
  showSearch = true,
  initialPath = "",
  options = [],
  onChange,
}) => {
  const [filterValues, setFilterValues] = useState<any>({
    search: "",
  });

  const addOriginToPath = (path: string) => {
    return new URL(path, window.location.origin);
  };

  useEffect(() => {
    if (initialPath) {
      const url = addOriginToPath(initialPath);

      const searchParams = url.searchParams;
      const values: any = {};
      searchParams.forEach((value, key) => {
        values[key] = value;
      });
      setFilterValues(values);
    }
  }, [initialPath]);

  useEffect(() => {
    let newValue = addOriginToPath(initialPath);
    Object.keys(filterValues).forEach((key) => {
      newValue.searchParams.set(key, filterValues[key]);
    });
    newValue.searchParams.set("page", "1");
    onChange(pathWithSearch(newValue.toString()));
  }, [filterValues]);

  return (
    <VStack align={"stretch"}>
      {showSearch && (
        <FormControl>
          <InputGroup>
            <Input
              value={filterValues.search}
              onChange={(e) => {
                setFilterValues({ ...filterValues, search: e.target.value });
              }}
            />
            <InputRightAddon>
              <MdSearch />
            </InputRightAddon>
          </InputGroup>
        </FormControl>
      )}
      {options.length > 0 && (
        <HStack align={"stretch"}>
          {options.map((option: any, index: number) => {
            if (Object.keys(filterValues).includes(option.key) == false) {
              return null;
            }
            if (option.type === "select") {
              return (
                <Box key={index}>
                  <Select
                    label={option.label}
                    key={index}
                    options={option.values || []}
                    value={filterValues[option.key] || ""}
                    onChange={(newValue) => {
                      setFilterValues({
                        ...filterValues,
                        [option.key]: newValue,
                      });
                    }}
                  />
                </Box>
              );
            } else if (option.type === "date") {
              return (
                <Box key={index}>
                  <FormControl>
                    <FormLabel>{option.label}</FormLabel>
                    <Input
                      type={"date"}
                      value={filterValues[option.key] || ""}
                      onChange={(e) => {
                        setFilterValues({
                          ...filterValues,
                          [option.key]: e.target.value,
                        });
                      }}
                    />
                  </FormControl>
                </Box>
              );
            }
            return null;
          })}
        </HStack>
      )}
    </VStack>
  );
};
