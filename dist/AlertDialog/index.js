"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const react_1 = require("@chakra-ui/react");
const AlertDialog = ({ isOpen, onClose, title = "Dialog", description = "Dialog body", confirmLabel = "Confirm", cancelLabel = "Cancel", leastDestructiveRef, onConfirm, }) => {
    return (React.createElement(react_1.AlertDialog, { isOpen: isOpen, onClose: onClose, leastDestructiveRef: leastDestructiveRef },
        React.createElement(react_1.AlertDialogOverlay, null),
        React.createElement(react_1.AlertDialogContent, null,
            React.createElement(react_1.AlertDialogHeader, null, title),
            React.createElement(react_1.AlertDialogBody, null, description),
            React.createElement(react_1.AlertDialogFooter, null,
                React.createElement(react_1.HStack, null,
                    React.createElement(react_1.Button, { onClick: onClose, colorScheme: "red" }, cancelLabel),
                    React.createElement(react_1.Button, { onClick: onConfirm }, confirmLabel))))));
};
exports.default = AlertDialog;
