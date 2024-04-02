import * as React from "react";
import { FlexProps, TableProps as ChakraTableProps } from "@chakra-ui/react";
interface TableProps {
    headings: {
        key: string;
        title: React.ReactNode;
        rightAddon?: React.ReactNode;
        justify?: FlexProps["justify"];
        padding?: FlexProps["padding"];
    }[];
    rows: {
        [key: string]: {
            value: any;
        };
    }[];
    isSkeleton?: boolean;
    skeletonRows?: number;
    skeletonHeight?: string;
    variant?: string;
    size?: ChakraTableProps["size"];
    headingReplace?: React.ReactNode;
}
export declare const Table: React.FC<TableProps>;
export {};
