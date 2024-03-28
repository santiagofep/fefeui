import * as React from "react";
import { ButtonProps } from "../types";
import { BoxProps } from "@chakra-ui/react";
export interface TutorialProps extends BoxProps {
    title: string;
    description: string;
    video?: {
        url: string;
    };
    button1?: ButtonProps;
    button2?: ButtonProps;
}
export declare const Tutorial: React.FC<TutorialProps>;
