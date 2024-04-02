import * as React from "react";
export interface AccordionItemProps {
    title: string;
    leftIcon?: React.ReactNode;
    children: React.ReactNode;
}
export interface AccordionProps {
    items?: AccordionItemProps[];
}
export declare const Accordion: React.FC<AccordionProps>;
