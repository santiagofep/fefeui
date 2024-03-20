import * as React from "react";
export interface TutorialCardProps {
    title: string;
    description: string;
    video?: {
        url: string;
    };
    onClose?: () => void;
    button1?: {
        label: string;
        buttonProps: any;
    };
    button2?: {
        label: string;
        buttonProps: any;
    };
}
export declare const TutorialCard: React.FC<TutorialCardProps>;
