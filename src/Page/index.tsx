import * as React from "react";
import { useState, useEffect } from "react";

import {
  Box,
  Container,
  ContainerProps,
  Divider,
  Flex,
  Heading,
  IconButton,
  Text,
  VStack,
} from "@chakra-ui/react";
import { MdArrowBack } from "react-icons/md";

interface PageProps {
  title: string;
  description: string;
  children?: React.ReactNode;
  maxWidth?: ContainerProps["maxWidth"];
  onGoBack?: () => void;
  actions?: React.ReactNode;
}

export const Page: React.FC<PageProps> = ({
  title,
  description,
  children,
  maxWidth = "container.xl",
  onGoBack,
  actions,
}) => {
  return (
    <Container maxWidth={maxWidth}>
      <VStack align={"stretch"}>
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Flex alignItems={"center"}>
            {onGoBack && (
              <IconButton
                aria-label="Go back"
                onClick={onGoBack}
                marginRight={"0.5rem"}
                size={"sm"}
              >
                <MdArrowBack />
              </IconButton>
            )}
            <Heading size="lg">{title}</Heading>
          </Flex>
          <Box>{actions && actions}</Box>
        </Flex>
        <Text>{description}</Text>
        <Divider />
        <Box>{children}</Box>
      </VStack>
    </Container>
  );
};
