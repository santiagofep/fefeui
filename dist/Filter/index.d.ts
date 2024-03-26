import * as React from "react";
interface FilterProps {
    showSearch?: boolean;
    options?: {
        label: string;
        key: string;
        values?: {
            label: string;
            value: string;
        }[];
        type: "select" | "date";
    }[];
    initialValue: string;
    onChange: (filter: string) => void;
}
export declare const Filter: React.FC<FilterProps>;
export {};
