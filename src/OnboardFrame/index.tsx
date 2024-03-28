import * as React from "react";
import { useState, useEffect } from "react";

import { Steps, StepsProps } from "../Steps";
import {
  Box,
  BoxProps,
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { Tutorial, TutorialProps } from "../Tutorial";

interface OnboardFrameProps extends BoxProps {
  title: string;
  description: string;
  tutorial: TutorialProps;
  steps: StepsProps;
  children?: React.ReactNode;
}

export const OnboardFrame: React.FC<OnboardFrameProps> = ({
  title,
  description,
  tutorial,
  steps,
  children,
  width = "100%",
  height = "100vh",
  marginTop = "1.5rem",
  ...props
}) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Box width={width} height={height} marginTop={marginTop} {...props}>
      <VStack align={"stretch"} spacing={5} width={"100%"}>
        <Steps {...steps} />
        <Container maxW="container.lg">
          <VStack align={"stretch"} spacing={2} width={"100%"}>
            <Heading size="md">{title}</Heading>
            <Box>{description}</Box>
            <Box>
              <Button onClick={onOpen}>Ver guía</Button>
            </Box>
          </VStack>
        </Container>
        <Container maxW="container.lg">{children}</Container>
      </VStack>
      <Drawer isOpen={isOpen} onClose={onClose} size={"lg"}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Guía de uso</DrawerHeader>
          <DrawerBody>
            <Tutorial {...tutorial} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
