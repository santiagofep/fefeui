import * as React from "react";
import { ButtonProps, VideoProps } from "../types";
export interface TutorialCardProps {
    title: string;
    description: string;
    video?: VideoProps;
    onClose?: () => void;
    button1?: ButtonProps;
    button2?: ButtonProps;
    variant?: string;
}
export declare const TutorialCard: React.FC<TutorialCardProps>;
