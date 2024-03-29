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
  useMultiStyleConfig,
} from "@chakra-ui/react";

import { MdClose } from "react-icons/md";

import { ButtonProps, VideoProps } from "../types";
import { Video } from "../Video";

export interface TutorialCardProps {
  title: string;
  description: string;
  video?: VideoProps;
  onClose?: () => void;
  button1?: ButtonProps;
  button2?: ButtonProps;
  variant?: string;
}

export const TutorialCard: React.FC<TutorialCardProps> = ({
  title,
  description,
  video,
  onClose,
  button1,
  button2,
  variant,
}) => {
  const styles = useMultiStyleConfig("TutorialCard", { variant });
  return (
    <Box position={"relative"} __css={styles.wrapper}>
      <HStack
        justifyContent={"space-between"}
        borderRadius={"md"}
        overflow={"hidden"}
        flexWrap={["wrap", "nowrap"]}
        flexDirection={["column-reverse", "column-reverse", "row"]}
      >
        <VStack align={"stretch"} padding={5} spacing={2}>
          <Heading size="md">{title}</Heading>
          <Text>{description}</Text>
          {button1 || button2 ? (
            <HStack>
              {button1 && <Button size="sm" {...button1} />}
              {button2 && <Button size="sm" {...button2} />}
            </HStack>
          ) : null}
        </VStack>

        <Box minW={"300px"} width={["100%", "100%", "fit-content"]}>
          {video ? (
            <Video {...video} />
          ) : (
            <AspectRatio ratio={16 / 9}>
              <Image
                src="https://cdn.shopify.com/s/files/1/0628/3047/7483/files/2150836116.jpg?v=1710883876"
                objectFit="cover"
              />
            </AspectRatio>
          )}
        </Box>
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
