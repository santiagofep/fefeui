import * as React from "react";
import { useState, useEffect } from "react";

import {
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  AlertDialog as ChakraAlertDialog,
  HStack,
} from "@chakra-ui/react";

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

export const AlertDialog: React.FC<AlertDialogProps> = ({
  isOpen,
  onClose,
  title = "Dialog",
  description = "Dialog body",
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  leastDestructiveRef,
  onConfirm,
}) => {
  return (
    <ChakraAlertDialog
      isOpen={isOpen}
      onClose={onClose}
      leastDestructiveRef={leastDestructiveRef}
    >
      <AlertDialogOverlay />
      <AlertDialogContent>
        <AlertDialogHeader>{title}</AlertDialogHeader>
        <AlertDialogBody>{description}</AlertDialogBody>
        <AlertDialogFooter>
          <HStack>
            <Button onClick={onClose} colorScheme="red">
              {cancelLabel}
            </Button>
            <Button onClick={onConfirm}>{confirmLabel}</Button>
          </HStack>
        </AlertDialogFooter>
      </AlertDialogContent>
    </ChakraAlertDialog>
  );
};
