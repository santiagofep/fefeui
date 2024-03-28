import * as React from "react";
import { AlertProps as ChakraAlertProps, ButtonProps } from "@chakra-ui/react";
interface AlertProps {
    title: string;
    description?: string;
    status: ChakraAlertProps["status"];
    button?: ButtonProps;
}
export declare const Alert: React.FC<AlertProps>;
export {};
