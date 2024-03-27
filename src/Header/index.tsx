import * as React from "react";
import { useState, useEffect } from "react";

import {
  Avatar,
  Box,
  Flex,
  FlexProps,
  HStack,
  IconButton,
  IconButtonProps,
  Image,
  VStack,
} from "@chakra-ui/react";
import { MdMenu } from "react-icons/md";

interface HeaderProps extends FlexProps {
  hamburger?: {
    display: IconButtonProps["display"];
    onClick: () => void;
  };
  logo: {
    src: string;
    alt: string;
    href: string;
    height?: string;
    width?: string;
  };
  notifications?: {
    id: string;
    message: string;
  }[];
  user?: {
    name: string;
    row1: string;
    row2: string;
    avatar?: string;
  };
}

export const Header: React.FC<HeaderProps> = ({
  hamburger,
  logo,
  notifications,
  user,
  justifyContent = "space-between",
  backgroundColor = "gray.100",
  height = "63px",
  alignItems = "center",
  paddingX = "0.5rem",
  ...props
}) => {
  return (
    <Flex
      justifyContent={justifyContent}
      backgroundColor={backgroundColor}
      height={height}
      alignItems={alignItems}
      paddingX={paddingX}
      {...props}
    >
      <HStack>
        {hamburger && (
          <Box display={hamburger.display}>
            <IconButton
              aria-label="Open menu"
              icon={<MdMenu />}
              onClick={hamburger.onClick}
            />
          </Box>
        )}
        <a href={logo.href}>
          <Image
            src={logo.src}
            alt={logo.alt}
            height={logo.height}
            width={logo.width}
            fit="contain"
          />
        </a>
      </HStack>
      {user && (
        <HStack
          shadow={"md"}
          paddingY={"0.25rem"}
          paddingX={"0.5rem"}
          backgroundColor={"white"}
          borderRadius={"md"}
          height={"fit-content"}
        >
          <Avatar name={user.name} src={user.avatar} size="sm" />
          <VStack
            align={"stretch"}
            spacing={0}
            lineHeight={"1.25rem"}
            paddingRight={"0.50rem"}
          >
            {user.row1 && <Box>{user.row1}</Box>}
            {user.row2 && <Box fontWeight={"600"}>{user.row2}</Box>}
          </VStack>
        </HStack>
      )}
    </Flex>
  );
};
