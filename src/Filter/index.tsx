import * as React from "react";
import { useState, useEffect } from "react";

import {
  FormControl,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputRightAddon,
  VStack,
  FormHelperText,
  Select,
} from "@chakra-ui/react";

import { MdSearch } from "react-icons/md";

interface FilterProps {
  urlSearch: string;
  onChange: (urlSearch: URLSearchParams) => void;
  searchBar?: {
    searchParam: string;
    helperText?: string;
  };
  options?: {
    label: string;
    key: string;
    values?: {
      label: string;
      value: string;
    }[];
    type: "select" | "date";
  }[];
}

export const Filter: React.FC<FilterProps> = ({
  searchBar,
  urlSearch = "",
  options = [],
  onChange,
}) => {
  let initialFilterValues = searchBar ? { [searchBar.searchParam]: "" } : {};
  const [filterValues, setFilterValues] = useState<any>(initialFilterValues);

  useEffect(() => {
    if (urlSearch) {
      const searchParams = new URLSearchParams(urlSearch);
      const values: any = {};
      searchParams.forEach((value, key) => {
        values[key] = value;
      });
      setFilterValues(values);
    }
  }, [urlSearch]);

  const setNewValue = (key: string, value: string) => {
    setFilterValues({
      ...filterValues,
      [key]: value,
      page: "1",
    });
  };

  useEffect(() => {
    const searchParams = new URLSearchParams();
    Object.keys(filterValues).forEach((key) => {
      searchParams.set(key, filterValues[key]);
    });
    onChange(searchParams);
  }, [filterValues]);

  return (
    <VStack align={"stretch"}>
      {searchBar && (
        <FormControl>
          <InputGroup>
            <Input
              value={filterValues[searchBar.searchParam]}
              onChange={(e) => {
                setNewValue(searchBar.searchParam, e.target.value);
              }}
            />
            <InputRightAddon>
              <MdSearch />
            </InputRightAddon>
          </InputGroup>
          {searchBar.helperText && (
            <FormHelperText>{searchBar.helperText}</FormHelperText>
          )}
        </FormControl>
      )}
      {options.length > 0 && (
        <HStack align={"stretch"}>
          {options.map((option: any, index: number) => {
            if (option.type === "select") {
              return (
                <FormControl key={index}>
                  <FormLabel fontSize={"xs"} marginBottom={"sm"}>
                    {option.label}
                  </FormLabel>
                  <Select
                    size={"xs"}
                    value={filterValues[option.key] || ""}
                    onChange={(e) => {
                      setNewValue(option.key, e.target.value);
                    }}
                  >
                    {option.values?.map((value: any) => (
                      <option key={value.value} value={value.value}>
                        {value.label}
                      </option>
                    ))}
                  </Select>
                </FormControl>
              );
            } else if (option.type === "date") {
              return (
                <FormControl key={index}>
                  <FormLabel fontSize={"xs"} marginBottom={"sm"}>
                    {option.label}
                  </FormLabel>
                  <Input
                    size={"xs"}
                    type={"date"}
                    value={filterValues[option.key] || ""}
                    onChange={(e) => {
                      setNewValue(option.key, e.target.value);
                    }}
                  />
                </FormControl>
              );
            }
            return null;
          })}
        </HStack>
      )}
    </VStack>
  );
};
