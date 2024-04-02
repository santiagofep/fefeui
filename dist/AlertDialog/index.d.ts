import * as React from "react";
interface AlertDialogProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm?: () => void;
    title: string;
    description: string;
    confirmLabel: string;
    cancelLabel: string;
    leastDestructiveRef: React.RefObject<HTMLElement>;
}
export declare const AlertDialog: React.FC<AlertDialogProps>;
export {};
