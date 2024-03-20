import * as React from "react";
import { useState, useEffect } from "react";

import {
  AspectRatio,
  Heading,
  Text,
  VStack,
  Image,
  HStack,
  Box,
  IconButton,
  Button,
} from "@chakra-ui/react";
import { MdClose } from "react-icons/md";

export interface TutorialCardProps {
  title: string;
  description: string;
  video?: {
    url: string;
  };
  onClose?: () => void;
  button1?: {
    label: string;
    buttonProps: any;
  };
  button2?: {
    label: string;
    buttonProps: any;
  };
}

export const TutorialCard: React.FC<TutorialCardProps> = ({
  title,
  description,
  video,
  onClose,
  button1,
  button2,
}) => {
  return (
    <Box position={"relative"}>
      <HStack
        justifyContent={"space-between"}
        borderRadius={"md"}
        overflow={"hidden"}
        shadow={"md"}
        flexWrap={["wrap", "nowrap"]}
        flexDirection={["column-reverse", "column-reverse", "row"]}
      >
        <VStack align={"stretch"} padding={5} spacing={2}>
          <Heading size="md">{title}</Heading>
          <Text>{description}</Text>
          {button1 || button2 ? (
            <HStack>
              {button1 && (
                <Button size={"sm"} {...button1.buttonProps}>
                  {button1.label}
                </Button>
              )}
              {button2 && (
                <Button size="sm" {...button2.buttonProps}>
                  {button2.label}
                </Button>
              )}
            </HStack>
          ) : null}
        </VStack>
        <AspectRatio
          ratio={16 / 9}
          minW={"300px"}
          width={["100%", "100%", "fit-content"]}
        >
          {video ? (
            <iframe src={video.url} allowFullScreen />
          ) : (
            <Image
              src="https://cdn.shopify.com/s/files/1/0628/3047/7483/files/2150836116.jpg?v=1710883876"
              objectFit="cover"
            />
          )}
        </AspectRatio>
      </HStack>
      {onClose && (
        <IconButton
          aria-label=""
          position={"absolute"}
          top="0.25rem"
          right="0.25rem"
          size="xs"
          onClick={onClose}
        >
          <MdClose />
        </IconButton>
      )}
    </Box>
  );
};
