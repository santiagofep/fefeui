import * as React from "react";
import { useState, useEffect } from "react";

import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Accordion as ChakraAccordion,
  Box,
  Heading,
  Flex,
} from "@chakra-ui/react";

export interface AccordionItemProps {
  title: string;
  leftIcon?: React.ReactNode;
  children: React.ReactNode;
}

export interface AccordionProps {
  items?: AccordionItemProps[];
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  return (
    <ChakraAccordion allowToggle>
      {items?.map((item, index) => (
        <AccordionItem key={index}>
          {({ isExpanded }) => (
            <>
              <AccordionButton _expanded={{ bg: "gray.200" }}>
                <Flex as="span" flex="1" textAlign="left" align={"center"}>
                  {item.leftIcon && <Box mr={"0.5rem"}>{item.leftIcon}</Box>}
                  <Heading size="md">{item.title}</Heading>
                </Flex>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel background={isExpanded ? "gray.50" : ""}>
                {item.children}
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      ))}
    </ChakraAccordion>
  );
};
