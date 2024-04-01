import * as React from "react";
import { ButtonProps } from "../types";
interface RightButtonProps extends ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
}
export declare const RightButton: React.FC<RightButtonProps>;
export {};
