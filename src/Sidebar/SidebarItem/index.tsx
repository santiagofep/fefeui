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

import { MdArrowDropDown, MdOpenInNew } from "react-icons/md";

import { getButtonVariant } from "./utils";

export interface SidebarChildItemProps {
  title: string;
  href: string;
  to?: string;
  target?: string;
  isActive: boolean;
}

export interface SidebarItemWithChildrenProps extends SidebarChildItemProps {
  children?: SidebarChildItemProps[];
  icon: ButtonProps["leftIcon"];
}

export interface SidebarItemProps extends SidebarItemWithChildrenProps {
  as: ButtonProps["as"];
}

const ButtonInner: React.FC<{
  title: string;
  isExternal: boolean;
}> = ({ title, isExternal }) => {
  return (
    <Flex width={"100%"} alignItems={"center"}>
      {title}
      {isExternal && <MdOpenInNew size={10} style={{ marginLeft: "4px" }} />}
    </Flex>
  );
};

const SidebarItem: React.FC<SidebarItemProps> = ({
  children,
  title,
  icon,
  href,
  isActive,
  to,
  as = "a",
  target = "_self",
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
        target={target}
        to={to}
      >
        <ButtonInner title={title} isExternal={target === "_blank"} />
      </Button>
      {children && (
        <Collapse in={childrenIsActive}>
          <VStack align={"stretch"} marginLeft={"1.5rem"} spacing={1}>
            {children.map((child: SidebarChildItemProps, index: number) => {
              return (
                <Button
                  key={index}
                  size={"sm"}
                  variant={getButtonVariant(child.isActive, false)}
                  as={as}
                  href={child.href}
                  target={child.target}
                  to={child.to}
                >
                  <Flex width={"100%"} alignItems={"center"}>
                    <ButtonInner
                      title={child.title}
                      isExternal={child.target === "_blank"}
                    />
                  </Flex>
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
