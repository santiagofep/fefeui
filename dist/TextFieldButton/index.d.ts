import * as React from "react";
interface TextFieldButtonProps {
    label: string;
    buttonLabel: string;
    onSubmit: (value: string) => void;
    isLoading?: boolean;
    placeholder?: string;
    isSkeleton?: boolean;
}
export declare const TextFieldButton: React.FC<TextFieldButtonProps>;
export {};
