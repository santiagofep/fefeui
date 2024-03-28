import * as React from "react";

import { Box, ButtonProps, Flex, FlexProps, VStack } from "@chakra-ui/react";

import SidebarItem, { SidebarItemWithChildrenProps } from "./SidebarItem";

export interface SidebarProps extends FlexProps {
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
  width = "250px",
  flexDirection = "column",
  justifyContent = "space-between",
  ...props
}) => {
  return (
    <Flex
      overflowY={overflowY}
      overflowX={overflowX}
      height={height}
      width={width}
      flexDirection={flexDirection}
      justifyContent={justifyContent}
      {...props}
    >
      <VStack
        align={"stretch"}
        paddingX={"0.5rem"}
        width={"100%"}
        marginBottom={"2rem"}
        spacing={1}
      >
        {items.map((item: SidebarItemWithChildrenProps, index: number) => {
          return <SidebarItem as={itemsAs} {...item} key={index} />;
        })}
      </VStack>
      {extra && <Box>{extra}</Box>}
    </Flex>
  );
};
