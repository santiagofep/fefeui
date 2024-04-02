import * as React from "react";
import { InputProps } from "@chakra-ui/react";
interface TextFieldProps {
    label: string;
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
    type: InputProps["type"];
    helperText?: string;
    isSkeleton?: boolean;
    required?: boolean;
    isInvalid?: boolean;
}
export declare const TextField: React.FC<TextFieldProps>;
export {};
