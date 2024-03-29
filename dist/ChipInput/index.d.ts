import * as React from "react";
interface ChipInputProps {
    label: string;
    buttonLabel: string;
    isLoading?: boolean;
    placeholder?: string;
    values: string[];
    onAdd: (value: string) => void;
    onRemove: (value: string) => void;
    tagIcon?: React.ElementType;
    helperText?: string;
    isSkeleton?: boolean;
}
export declare const ChipInput: React.FC<ChipInputProps>;
export {};
