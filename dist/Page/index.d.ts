import * as React from "react";
import { ContainerProps } from "@chakra-ui/react";
interface PageProps {
    title: string;
    description: string;
    children?: React.ReactNode;
    maxWidth?: ContainerProps["maxWidth"];
    goBack?: () => void;
}
export declare const Page: React.FC<PageProps>;
export {};
