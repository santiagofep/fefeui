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
exports.Steps = void 0;
const react_1 = require("@chakra-ui/react");
const React = __importStar(require("react"));
const md_1 = require("react-icons/md");
const Steps = ({ steps, currentStep, onStepClick, completedMessage = "completed", currentMessage = "current", pendingMessage = "pending", }) => {
    return (React.createElement(react_1.Box, null,
        React.createElement(react_1.Box, { marginX: "15px", borderBottomColor: "gray.100", borderBottom: "2px solid", marginBottom: "-20px", marginTop: "20px" }),
        React.createElement(react_1.HStack, { justifyContent: "space-between", align: "start" }, steps.map((step, index) => {
            const stepNumber = index + 1;
            let stepStatus = "pending";
            let color = "gray";
            let stepIcon = stepNumber;
            let message = pendingMessage;
            if (stepNumber < currentStep) {
                stepStatus = "completed";
                stepIcon = React.createElement(md_1.MdCheck, null);
                color = "gray";
                message = completedMessage;
            }
            if (stepNumber === currentStep) {
                stepStatus = "active";
                stepIcon = stepNumber;
                color = "gray";
                message = currentMessage;
            }
            const stepIsClickable = onStepClick && stepNumber < currentStep;
            return (React.createElement(react_1.VStack, { key: index, spacing: 0, width: "100%", align: "center", textAlign: "center" },
                React.createElement(react_1.Circle, { onClick: () => {
                        stepIsClickable && onStepClick(stepNumber);
                    }, cursor: stepIsClickable ? "pointer" : "default", backgroundColor: "gray", size: stepStatus === "active" ? "40px" : "30px", marginTop: stepStatus !== "active" ? "5px" : "0px", background: stepStatus === "active" ? `${color}.900` : `${color}.50`, color: stepStatus === "active" ? "white" : `${color}.800`, border: "2px solid", fontWeight: "bold" },
                    React.createElement(react_1.Box, null, stepIcon)),
                stepStatus !== "active" && React.createElement(react_1.Box, { height: "5px" }),
                React.createElement(react_1.Heading, { size: "sm", fontWeight: "700", display: ["none", "none", "none", "block"] }, step.title),
                React.createElement(react_1.Text, { display: ["none", "none", "none", "block"] }, step.description),
                React.createElement(react_1.Box, { color: `${color}.800`, fontSize: "0.85rem", display: ["none", "none", "none", "block"] }, message)));
        }))));
};
exports.Steps = Steps;
