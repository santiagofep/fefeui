import * as React from "react";
import { useState, useEffect } from "react";

import { ButtonProps } from "../types";
import {
  BoxProps,
  Box,
  VStack,
  AspectRatio,
  Button,
  Text,
  Heading,
  HStack,
} from "@chakra-ui/react";

export interface TutorialProps extends BoxProps {
  title: string;
  description: string;
  video?: {
    url: string;
  };
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
    <Box {...props}>
      <VStack align={"stretch"} spacing={3}>
        {video && (
          <AspectRatio ratio={16 / 9} minW={"300px"} width={["100%", "100%"]}>
            <iframe src={video.url} allowFullScreen />
          </AspectRatio>
        )}
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
