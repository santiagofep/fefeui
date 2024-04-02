import * as React from "react";
interface FilterProps {
    urlSearch: string;
    onChange: (urlSearch: URLSearchParams) => void;
    searchBar?: {
        searchParam: string;
        helperText?: string;
    };
    options?: {
        label: string;
        key: string;
        values?: {
            label: string;
            value: string;
        }[];
        type: "select" | "date";
    }[];
}
export declare const Filter: React.FC<FilterProps>;
export {};
