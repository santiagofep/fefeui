import * as React from "react";
import { useState, useEffect } from "react";

import { Steps, StepsProps } from "../Steps";
import { Box, BoxProps, Heading, VStack } from "@chakra-ui/react";
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
  ...props
}) => {
  return (
    <Box display={"flex"} width={width} height={height} {...props}>
      <Box flex={3} bg={"gray.50"} padding={"1rem"}>
        <Tutorial {...tutorial} />
      </Box>
      <Box flex={7} padding={"1rem"}>
        <VStack align={"stretch"} spacing={5}>
          <Steps {...steps} />
          <Heading size="md">{title}</Heading>
          <Box>{description}</Box>
          {children}
        </VStack>
      </Box>
    </Box>
  );
};
