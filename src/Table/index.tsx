import * as React from "react";
import { useState, useEffect } from "react";

import {
  Table as ChakraTable,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Flex,
  Box,
  Skeleton,
  FlexProps,
  useMultiStyleConfig,
  TableProps as ChakraTableProps,
  Center,
  VStack,
  Heading,
} from "@chakra-ui/react";

interface TableProps {
  headings: {
    key: string;
    title: React.ReactNode;
    rightAddon?: React.ReactNode;
    justify?: FlexProps["justify"];
    padding?: FlexProps["padding"];
  }[];
  rows: {
    [key: string]: {
      value: any;
    };
  }[];
  isSkeleton?: boolean;
  skeletonRows?: number;
  skeletonHeight?: string;
  variant?: string;
  size?: ChakraTableProps["size"];
  headingReplace?: React.ReactNode;
  emptyData?: {
    title: string;
    description: string;
  };
}

export const Table: React.FC<TableProps> = ({
  headings,
  rows,
  isSkeleton,
  skeletonRows = 5,
  skeletonHeight = "20px",
  variant,
  size,
  headingReplace,
  emptyData,
}) => {
  const styles = useMultiStyleConfig("FefeTable", { variant });

  const skeletonArray = Array.from(
    { length: skeletonRows },
    (_, index) => index
  );
  const itemsCount = rows.length;

  return (
    <Box position={"relative"}>
      {headingReplace && (
        <Box
          position={"sticky"}
          top={0}
          left={0}
          right={0}
          zIndex={1}
          background={"white"}
        >
          {headingReplace}
        </Box>
      )}
      <ChakraTable size={size}>
        {!headingReplace && (
          <Thead background={"gray.50"}>
            <tr>
              {headings.map((heading) => (
                <Th key={heading.key} padding={heading.padding}>
                  <Flex
                    alignItems={"center"}
                    width="full"
                    justify={heading.justify}
                  >
                    {heading.title}{" "}
                    {heading.rightAddon && (
                      <Box marginLeft={"0.25rem"}>{heading.rightAddon}</Box>
                    )}
                  </Flex>
                </Th>
              ))}
            </tr>
          </Thead>
        )}
        <Tbody>
          {isSkeleton &&
            skeletonArray.map((index) => (
              <Tr key={index}>
                {headings.map((heading, index) => (
                  <Td key={index}>
                    <Skeleton height={skeletonHeight} />
                  </Td>
                ))}
              </Tr>
            ))}
          {!isSkeleton && (
            <>
              {rows.map((row, index) => {
                return (
                  <Tr key={index}>
                    {headings.map((heading, index) => (
                      <Td key={index} padding={heading.padding}>
                        <Flex w={"full"} justify={heading.justify}>
                          {row[heading.key].value}
                        </Flex>
                      </Td>
                    ))}
                  </Tr>
                );
              })}
            </>
          )}
        </Tbody>
      </ChakraTable>
      {!isSkeleton && itemsCount === 0 && (
        <Center border={"1px solid"} borderTop={0} borderColor={"gray.100"}>
          <VStack my={20} spacing={0}>
            <Heading size="md">{emptyData?.title}</Heading>
            <Box>{emptyData?.description}</Box>
          </VStack>
        </Center>
      )}
    </Box>
  );
};
