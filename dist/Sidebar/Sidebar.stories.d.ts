import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Sidebar } from "./index";
declare const meta: Meta<typeof Sidebar>;
export default meta;
type Story = StoryObj<typeof Sidebar>;
export declare const sidebarArgs: {
    itemsAs: import("@chakra-ui/react").ComponentWithAs<"a", import("@chakra-ui/react").LinkProps>;
    items: ({
        title: string;
        icon: React.JSX.Element;
        href: string;
        isActive: boolean;
        children: ({
            title: string;
            href: string;
            isActive: boolean;
            target?: undefined;
        } | {
            title: string;
            href: string;
            isActive: boolean;
            target: string;
        })[];
        target?: undefined;
    } | {
        title: string;
        icon: React.JSX.Element;
        href: string;
        isActive: boolean;
        children?: undefined;
        target?: undefined;
    } | {
        title: string;
        icon: React.JSX.Element;
        href: string;
        isActive: boolean;
        target: string;
        children?: undefined;
    })[];
    extra: React.JSX.Element;
};
export declare const Default: Story;
