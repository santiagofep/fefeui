import * as React from "react";
import { useState, useEffect } from "react";

import { ButtonProps, VideoProps } from "../types";
import {
  BoxProps,
  Box,
  VStack,
  AspectRatio,
  Button,
  Heading,
  HStack,
} from "@chakra-ui/react";
import { Video } from "../Video";

export interface TutorialProps extends BoxProps {
  title: string;
  description: React.ReactNode;
  video?: VideoProps;
  button1?: ButtonProps;
  button2?: ButtonProps;
}

export const Tutorial: React.FC<TutorialProps> = ({
  title,
  description,
  video,
  button1,
  button2,
  ...props
}) => {
  return (
    <Box width={"100%"} {...props}>
      <VStack align={"stretch"} spacing={3}>
        {video && <Video {...video} />}
        <Heading size="md">{title}</Heading>
        {description && <Box>{description}</Box>}
        <HStack spacing={3}>
          {button1 && <Button {...button1} />}
          {button2 && <Button {...button2} />}
        </HStack>
      </VStack>
    </Box>
  );
};
