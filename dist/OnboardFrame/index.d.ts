import * as React from "react";
import { StepsProps } from "../Steps";
import { BoxProps, ImageProps } from "@chakra-ui/react";
import { TutorialProps } from "../Tutorial";
interface OnboardFrameProps extends BoxProps {
    title: string;
    description: string;
    tutorial: TutorialProps;
    steps: StepsProps;
    children?: React.ReactNode;
    col1Props?: BoxProps;
    col2Props?: BoxProps;
    contentMaxWidth?: string;
    logo?: ImageProps;
}
export declare const OnboardFrame: React.FC<OnboardFrameProps>;
export {};
