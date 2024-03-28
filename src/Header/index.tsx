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

export interface HeaderProps extends FlexProps {
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
  backgroundColor = "white",
  borderBottom = "1px solid",
  borderBottomColor = "gray.200",
  height = "63px",
  alignItems = "center",
  paddingX = "1rem",
  width = "100%",
  ...props
}) => {
  return (
    <Flex
      justifyContent={justifyContent}
      backgroundColor={backgroundColor}
      borderBottom={borderBottom}
      borderBottomColor={borderBottomColor}
      height={height}
      alignItems={alignItems}
      paddingX={paddingX}
      width={width}
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
        <Box display={["none", "block"]}>
          <a href={logo.href}>
            <Image
              src={logo.src}
              alt={logo.alt}
              height={logo.height}
              width={logo.width}
              fit="contain"
            />
          </a>
        </Box>
      </HStack>
      {user && (
        <HStack
          paddingY={"0.25rem"}
          paddingX={"0.5rem"}
          backgroundColor={"white"}
          borderRadius={"md"}
          height={"fit-content"}
          spacing={1}
        >
          <VStack
            align={"end"}
            spacing={0}
            lineHeight={"1.25rem"}
            paddingRight={"0.50rem"}
          >
            {user.row1 && <Box>{user.row1}</Box>}
            {user.row2 && <Box fontWeight={"600"}>{user.row2}</Box>}
          </VStack>
          <Avatar name={user.name} src={user.avatar} size="sm" />
        </HStack>
      )}
    </Flex>
  );
};
