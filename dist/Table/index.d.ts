import * as React from "react";
import { Table as ChakraTable } from "@chakra-ui/react";
interface TableProps {
    headings: {
        key: string;
        title: string;
        rightAddon?: React.ReactNode;
        align?: "left" | "center" | "right";
    }[];
    rows: {
        [key: string]: {
            value: any;
        };
    }[];
    tableProps?: React.ComponentProps<typeof ChakraTable>;
    isSkeleton?: boolean;
    skeletonRows?: number;
}
export declare const Table: React.FC<TableProps>;
export {};
