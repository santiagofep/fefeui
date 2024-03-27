import * as React from "react";
import { useState, useEffect } from "react";

import {
  Box,
  Button,
  ButtonProps,
  Collapse,
  Flex,
  VStack,
} from "@chakra-ui/react";

import { MdArrowDropDown } from "react-icons/md";

import { getButtonVariant } from "./utils";

export interface SidebarChildItemProps {
  title: string;
  href: string;
  isActive: boolean;
}

export interface SidebarItemWithChildrenProps extends SidebarChildItemProps {
  children?: SidebarChildItemProps[];
  icon: ButtonProps["leftIcon"];
}

export interface SidebarItemProps extends SidebarItemWithChildrenProps {
  as: ButtonProps["as"];
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  children,
  title,
  icon,
  href,
  isActive,
  as = "a",
}) => {
  const childrenIsActive =
    (children && children.some((child) => child.isActive)) || false;

  return (
    <>
      <Button
        width={"100%"}
        variant={getButtonVariant(isActive, childrenIsActive)}
        leftIcon={icon}
        rightIcon={children ? <MdArrowDropDown /> : undefined}
        size={"sm"}
        as={as}
        href={href}
      >
        <Flex width={"100%"}>{title}</Flex>
      </Button>
      {children && (
        <Collapse in={childrenIsActive}>
          <VStack align={"stretch"} marginLeft={"1.5rem"} spacing={1}>
            {children.map((child) => {
              return (
                <Button
                  size={"sm"}
                  variant={getButtonVariant(child.isActive, false)}
                  as={as}
                  href={child.href}
                >
                  <Flex width={"100%"}>{child.title}</Flex>
                </Button>
              );
            })}
          </VStack>
        </Collapse>
      )}
    </>
  );
};

export default SidebarItem;
