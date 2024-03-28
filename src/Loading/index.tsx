import * as React from "react";
import { useState, useEffect } from "react";

import { Box, Flex, Progress, Image, VStack } from "@chakra-ui/react";

interface LoadingProps {
  image: {
    src: string;
    alt: string;
    height: string;
  };
}

export const Loading: React.FC<LoadingProps> = ({ image }) => {
  return (
    <Flex
      width={"100%"}
      height={`calc(100vh - 240px)`}
      align={"center"}
      justifyContent={"center"}
    >
      <VStack justifyContent={"center"} width={"100%"}>
        <Image
          src={image.src}
          alt={image.alt}
          height={image.height}
          marginY={"1rem"}
        />
        <Box minW={"300px"}>
          <Progress size="xs" isIndeterminate />
        </Box>
      </VStack>
    </Flex>
  );
};
