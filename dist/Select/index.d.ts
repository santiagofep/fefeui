import * as React from "react";
interface SelectProps {
    label?: string;
    options: {
        value: string;
        label: string;
        isDisabled?: boolean;
    }[];
    value: string;
    helperText?: string;
    onChange: (newValue: string) => void;
    isInvalid?: boolean;
    emptyOption?: string;
    normalizeLabelSeparator?: string;
}
export declare const Select: React.FC<SelectProps>;
export {};
