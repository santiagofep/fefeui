import * as React from "react";
import { ButtonProps, FlexProps } from "@chakra-ui/react";
import { SidebarItemWithChildrenProps } from "./SidebarItem";
interface SidebarProps extends FlexProps {
    items: SidebarItemWithChildrenProps[];
    itemsAs?: ButtonProps["as"];
    extra?: React.ReactNode;
}
export declare const Sidebar: React.FC<SidebarProps>;
export {};
