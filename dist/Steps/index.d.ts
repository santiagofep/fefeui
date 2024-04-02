import * as React from "react";
export interface StepProps {
    title: string;
    description?: string;
}
export interface StepsProps {
    steps: StepProps[];
    onStepClick?: (step: number) => void;
    currentStep: number;
    completedMessage?: string;
    currentMessage?: string;
    pendingMessage?: string;
}
export declare const Steps: React.FC<StepsProps>;
