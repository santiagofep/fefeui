import * as React from "react";
import { StepsProps } from "../Steps";
import { BoxProps } from "@chakra-ui/react";
import { TutorialProps } from "../Tutorial";
interface OnboardFrameProps extends BoxProps {
    title: string;
    description: string;
    tutorial: TutorialProps;
    steps: StepsProps;
    children?: React.ReactNode;
}
export declare const OnboardFrame: React.FC<OnboardFrameProps>;
export {};
