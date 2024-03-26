import { Box, Flex, HStack, IconButton } from "@chakra-ui/react";
import * as React from "react";
import { useState, useEffect } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import { pathWithSearch } from "../utils";

interface PaginationProps {
  next: string | null;
  previous: string | null;
  totalCount: number;
  onChange: (newUrl: string) => void;
  pageCount?: number;
  itemsName?: string;
}

export const Pagination: React.FC<PaginationProps> = ({
  next,
  previous,
  totalCount,
  pageCount,
  itemsName = "items",
  onChange,
}) => {
  const getCurrentPage = () => {
    if (!previous) {
      return 1;
    } else {
      const url = new URL(previous);
      return parseInt(url.searchParams.get("page") || "1") + 1;
    }
  };

  return (
    <Flex justifyContent={"space-between"}>
      <Box>
        {totalCount ? (
          <span>
            {totalCount} {itemsName}
          </span>
        ) : null}
      </Box>
      <HStack>
        <IconButton
          aria-label="Previous"
          icon={<MdChevronLeft />}
          isDisabled={!previous}
          onClick={() => {
            onChange(pathWithSearch(previous || ""));
          }}
        />
        <IconButton
          aria-label="Next"
          icon={<MdChevronRight />}
          isDisabled={!next}
          onClick={() => {
            onChange(pathWithSearch(next || ""));
          }}
        />
      </HStack>
      <Box>
        {pageCount ? (
          <span>
            Page {getCurrentPage()} of {Math.ceil(totalCount / pageCount)}
          </span>
        ) : null}
      </Box>
    </Flex>
  );
};
