import * as React from "react";
import { ContainerProps } from "@chakra-ui/react";
interface PageProps {
    title: string;
    description: string;
    children?: React.ReactNode;
    maxWidth?: ContainerProps["maxWidth"];
    onGoBack?: () => void;
    actions?: React.ReactNode;
}
export declare const Page: React.FC<PageProps>;
export {};
