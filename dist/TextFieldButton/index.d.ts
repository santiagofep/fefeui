import * as React from "react";
interface TextFieldButtonProps {
    label: string;
    buttonLabel: string;
    onSubmit: (value: string) => void;
    isLoading?: boolean;
    placeholder?: string;
}
declare const TextFieldButton: React.FC<TextFieldButtonProps>;
export default TextFieldButton;
