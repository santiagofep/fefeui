import * as React from "react";
import { AlertProps as ChakraAlertProps, ButtonProps as ChakraButtonProps } from "@chakra-ui/react";
interface ButtonProps extends ChakraButtonProps {
    href?: string;
    target?: string;
}
interface AlertProps {
    title: string;
    description?: string;
    status: ChakraAlertProps["status"];
    button?: ButtonProps;
}
export declare const Alert: React.FC<AlertProps>;
export {};
