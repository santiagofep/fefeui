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
    variant?: string;
    size?: ChakraTableProps["size"];
}
export declare const Table: React.FC<TableProps>;
export {};
