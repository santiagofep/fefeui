import * as React from "react";
import { ButtonProps } from "@chakra-ui/react";
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
declare const SidebarItem: React.FC<SidebarItemProps>;
export default SidebarItem;
