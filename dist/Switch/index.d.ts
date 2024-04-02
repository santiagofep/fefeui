import * as React from "react";
interface SwitchProps {
    label: string;
    isChecked: boolean;
    onChange: (newValue: boolean) => void;
    helperText?: string;
    isSkeleton?: boolean;
}
export declare const Switch: React.FC<SwitchProps>;
export {};
