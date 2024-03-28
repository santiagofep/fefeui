import * as React from "react";
import { useState, useEffect } from "react";

import {
  Table as ChakraTable,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Flex,
  Box,
  Skeleton,
} from "@chakra-ui/react";

interface TableProps {
  headings: {
    key: string;
    title: string;
    rightAddon?: React.ReactNode;
    align?: "left" | "center" | "right";
  }[];
  rows: {
    [key: string]: {
      value: any;
    };
  }[];
  tableProps?: React.ComponentProps<typeof ChakraTable>;
  isSkeleton?: boolean;
  skeletonRows?: number;
}

export const Table: React.FC<TableProps> = ({
  headings,
  rows,
  tableProps,
  isSkeleton,
  skeletonRows = 5,
}) => {
  const skeletonArray = Array.from(
    { length: skeletonRows },
    (_, index) => index
  );
  return (
    <ChakraTable
      {...tableProps}
      border={"1px solid"}
      borderColor={"gray.200"}
      size={"md"}
    >
      <Thead background={"gray.50"}>
        <tr>
          {headings.map((heading) => (
            <Th key={heading.key}>
              <Flex alignItems={"center"} align={heading.align}>
                {heading.title}{" "}
                {heading.rightAddon && (
                  <Box marginLeft={"0.25rem"}>{heading.rightAddon}</Box>
                )}
              </Flex>
            </Th>
          ))}
        </tr>
      </Thead>

      <Tbody>
        {isSkeleton ? (
          skeletonArray.map((index) => (
            <Tr key={index}>
              {headings.map((heading, index) => (
                <Td key={index}>
                  <Skeleton height={"20px"} />
                </Td>
              ))}
            </Tr>
          ))
        ) : (
          <>
            {rows.map((row, index) => {
              return (
                <Tr key={index}>
                  {headings.map((heading, index) => (
                    <Td key={index} align={heading.align}>
                      {row[heading.key].value}
                    </Td>
                  ))}
                </Tr>
              );
            })}
          </>
        )}
      </Tbody>
    </ChakraTable>
  );
};
