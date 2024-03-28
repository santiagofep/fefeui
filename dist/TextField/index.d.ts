import * as React from "react";
interface TextFieldProps {
    label: string;
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
    type: "text" | "email" | "password";
    helperText?: string;
    isSkeleton?: boolean;
    required?: boolean;
    isInvalid?: boolean;
}
export declare const TextField: React.FC<TextFieldProps>;
export {};
