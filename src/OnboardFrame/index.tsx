import * as React from "react";
import { useState, useEffect } from "react";

import { Steps, StepsProps } from "../Steps";
import {
  Box,
  BoxProps,
  Button,
  Container,
  Flex,
  Heading,
  VStack,
} from "@chakra-ui/react";
import { Tutorial, TutorialProps } from "../Tutorial";

interface OnboardFrameProps extends BoxProps {
  title: string;
  description: string;
  tutorial: TutorialProps;
  steps: StepsProps;
  children?: React.ReactNode;
  col1Props?: BoxProps;
  col2Props?: BoxProps;
}

export const OnboardFrame: React.FC<OnboardFrameProps> = ({
  title,
  description,
  tutorial,
  steps,
  children,
  width = "100%",
  height = "100vh",
  col1Props = {
    backgroundColor: "gray.200",
  },
  col2Props,
  ...props
}) => {
  return (
    <Box width={width} height={height} {...props}>
      <Flex height={"100%"}>
        <Flex flex={4} padding={3} {...col1Props}>
          <Tutorial {...tutorial} />
        </Flex>
        <Flex flex={8} {...col2Props}>
          <VStack align={"stretch"} spacing={5} width={"100%"} marginTop={5}>
            <Steps {...steps} />
            <Container maxW="container.lg">
              <VStack align={"stretch"} spacing={2} width={"100%"}>
                <Heading size="md">{title}</Heading>
                <Box>{description}</Box>
              </VStack>
            </Container>
            <Container maxW="container.lg">{children}</Container>
          </VStack>
        </Flex>
      </Flex>
    </Box>
  );
};
