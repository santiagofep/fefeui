import * as React from "react";
interface SwitchProps {
    label: string;
    checked: boolean;
    onChange: (newValue: any) => void;
    helperText?: string;
}
export declare const Switch: React.FC<SwitchProps>;
export {};
