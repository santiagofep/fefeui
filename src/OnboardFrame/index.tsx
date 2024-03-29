import * as React from "react";
import { useState, useEffect } from "react";

import { Steps, StepsProps } from "../Steps";
import {
  Box,
  BoxProps,
  Image,
  Container,
  Flex,
  Heading,
  VStack,
  ImageProps,
} from "@chakra-ui/react";
import { Tutorial, TutorialProps } from "../Tutorial";

interface OnboardFrameProps extends BoxProps {
  title: string;
  description: string;
  steps: StepsProps;
  tutorial?: TutorialProps;
  children?: React.ReactNode;
  col1Props?: BoxProps;
  col2Props?: BoxProps;
  contentMaxWidth?: string;
  logo?: ImageProps;
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
    backgroundColor: "gray.100",
  },
  col2Props = {},
  contentMaxWidth = "container.lg",
  logo,
  ...props
}) => {
  if (!col1Props.width) {
    col1Props.width = ["100%", "100%", "320px"];
  }
  if (!col2Props.width) {
    col2Props.width = ["100%", "100%", "calc(100% - 320px)"];
  }

  return (
    <Box width={width} height={height} {...props}>
      <Flex height={"100%"} flexWrap={"wrap"}>
        <Flex padding={3} {...col1Props}>
          <VStack align={"stretch"} spacing={5} width={"100%"} marginTop={2}>
            {logo && <Image {...logo} />}
            {tutorial && <Tutorial {...tutorial} />}
          </VStack>
        </Flex>
        <Flex {...col2Props}>
          <VStack
            align={"stretch"}
            spacing={5}
            width={"100%"}
            marginTop={5}
            paddingX={3}
          >
            <Steps {...steps} />
            <Container maxW={contentMaxWidth}>
              <VStack align={"stretch"} spacing={2} width={"100%"}>
                <Heading size="md">{title}</Heading>
                <Box>{description}</Box>
              </VStack>
            </Container>
            <Container maxW={contentMaxWidth}>{children}</Container>
          </VStack>
        </Flex>
      </Flex>
    </Box>
  );
};
