import { BoxProps, ContainerProps } from "@chakra-ui/react";
import * as React from "react";
export interface CenteredFullPageProps extends BoxProps {
    children: React.ReactNode;
    variant?: string;
    contentMaxWidth?: ContainerProps["maxW"];
}
export declare const CenteredFullPage: React.FC<CenteredFullPageProps>;
