import * as React from "react";

import { Box, ButtonProps, Flex, FlexProps, VStack } from "@chakra-ui/react";

import SidebarItem, { SidebarItemWithChildrenProps } from "./SidebarItem";

interface SidebarProps extends FlexProps {
  items: SidebarItemWithChildrenProps[];
  itemsAs?: ButtonProps["as"];
  extra?: React.ReactNode;
}

export const Sidebar: React.FC<SidebarProps> = ({
  items,
  itemsAs = "a",
  extra,
  overflowY = "auto",
  overflowX = "hidden",
  height = "100vh",
  maxW = "250px",
  borderRight = "1px solid",
  borderColor = "gray.200",
  flexDirection = "column",
  justifyContent = "space-between",
  ...props
}) => {
  return (
    <Flex
      overflowY={overflowY}
      overflowX={overflowX}
      height={height}
      maxW={maxW}
      borderRight={borderRight}
      borderColor={borderColor}
      flexDirection={flexDirection}
      justifyContent={justifyContent}
      {...props}
    >
      <VStack
        align={"stretch"}
        paddingX={"0.5rem"}
        width={"100%"}
        marginBottom={"2rem"}
      >
        {items.map((item) => {
          return <SidebarItem as={itemsAs} {...item} />;
        })}
      </VStack>
      {extra && <Box>{extra}</Box>}
    </Flex>
  );
};
