import { Box, Flex, HStack, IconButton } from "@chakra-ui/react";
import * as React from "react";
import { useState, useEffect } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

interface PaginationProps {
  next: string | null;
  previous: string | null;
  TotalCount: number;
  onChange: (newUrl: string) => void;
  pageCount?: number;
  itemsName?: string;
}

export const Pagination: React.FC<PaginationProps> = ({
  next,
  previous,
  TotalCount,
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
        {TotalCount ? (
          <span>
            {TotalCount} {itemsName}
          </span>
        ) : null}
      </Box>
      <HStack>
        <IconButton
          aria-label="Previous"
          icon={<MdChevronLeft />}
          isDisabled={!previous}
          onClick={() => {
            onChange(previous || "");
          }}
        />
        <IconButton
          aria-label="Next"
          icon={<MdChevronRight />}
          isDisabled={!next}
          onClick={() => {
            onChange(next || "");
          }}
        />
      </HStack>
      <Box>
        {pageCount ? (
          <span>
            Page {getCurrentPage()} of {Math.ceil(TotalCount / pageCount)}
          </span>
        ) : null}
      </Box>
    </Flex>
  );
};
