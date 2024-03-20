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
  goBack?: () => void;
}

export const Page: React.FC<PageProps> = ({
  title,
  description,
  children,
  maxWidth,
  goBack,
}) => {
  return (
    <Container maxWidth={maxWidth}>
      <VStack align={"stretch"}>
        <Flex alignItems={"center"}>
          {goBack && (
            <IconButton
              aria-label="Go back"
              onClick={goBack}
              marginRight={"0.5rem"}
              size={"sm"}
            >
              <MdArrowBack />
            </IconButton>
          )}
          <Heading size="lg">{title}</Heading>
        </Flex>
        <Text>{description}</Text>
        <Divider />
        <Box>{children}</Box>
      </VStack>
    </Container>
  );
};
