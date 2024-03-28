import * as React from "react";
import { ButtonProps } from "../types";
export interface TutorialCardProps {
    title: string;
    description: string;
    video?: {
        url: string;
    };
    onClose?: () => void;
    button1?: ButtonProps;
    button2?: ButtonProps;
    shadow?: string;
}
export declare const TutorialCard: React.FC<TutorialCardProps>;
