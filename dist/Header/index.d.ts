import * as React from "react";
import { FlexProps, IconButtonProps } from "@chakra-ui/react";
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
export declare const Header: React.FC<HeaderProps>;
export {};
