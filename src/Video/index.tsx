import * as React from "react";
import { useState, useEffect } from "react";

import { VideoProps } from "../types";
import {
  AspectRatio,
  Box,
  IconButton,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { MdPlayArrow } from "react-icons/md";

export const Video: React.FC<VideoProps> = ({
  src,
  thumbnailSrc,
  embed,
  ratio = 16 / 9,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box position={"relative"} width={"100%"}>
        <Box>
          <AspectRatio ratio={ratio}>
            <Image src={thumbnailSrc} alt="Thumbnail" />
          </AspectRatio>
          <Box
            bg="blackAlpha.700" // Semi-transparent black background
            position="absolute" // Position it over the content
            top={0}
            right={0}
            bottom={0}
            left={0}
          />
        </Box>
        <IconButton
          aria-label=""
          position={"absolute"}
          top={"50%"}
          left={"50%"}
          transform={"translate(-50%, -50%)"}
          onClick={onOpen}
        >
          <MdPlayArrow />
        </IconButton>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose} size={"5xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader>
            <Box height={"0.33rem"} />
          </ModalHeader>
          <ModalBody>
            <AspectRatio ratio={ratio}>
              {embed ? (
                <iframe src={src} allowFullScreen />
              ) : (
                <video controls>
                  <source src={src} />
                </video>
              )}
            </AspectRatio>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
