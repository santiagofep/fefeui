import * as React from "react";
interface SelectProps {
    label: string;
    options: {
        value: string;
        label: string;
    }[];
    value: string;
    helperText?: string;
    onChange: (newValue: any) => void;
    isInvalid?: boolean;
    emptyOption?: string;
}
export declare const Select: React.FC<SelectProps>;
export {};
