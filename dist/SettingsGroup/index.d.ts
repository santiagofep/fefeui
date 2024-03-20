import * as React from "react";
export interface SettingsGroupProps {
    title: string;
    description?: string;
    children?: React.ReactNode;
    borderTop?: boolean;
    borderBottom?: boolean;
    id?: string;
}
export declare const SettingsGroup: React.FC<SettingsGroupProps>;
