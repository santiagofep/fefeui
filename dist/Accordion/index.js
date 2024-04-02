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
exports.Accordion = void 0;
const React = __importStar(require("react"));
const react_1 = require("@chakra-ui/react");
const Accordion = ({ items }) => {
    return (React.createElement(react_1.Accordion, { allowToggle: true, width: "100%" }, items === null || items === void 0 ? void 0 : items.map((item, index) => (React.createElement(react_1.AccordionItem, { key: index }, ({ isExpanded }) => (React.createElement(React.Fragment, null,
        React.createElement(react_1.AccordionButton, { _expanded: { bg: "gray.200" } },
            React.createElement(react_1.Flex, { as: "span", flex: "1", textAlign: "left", align: "center" },
                item.leftIcon && React.createElement(react_1.Box, { mr: "0.5rem" }, item.leftIcon),
                React.createElement(react_1.Heading, { size: "md" }, item.title)),
            React.createElement(react_1.AccordionIcon, null)),
        React.createElement(react_1.AccordionPanel, { background: isExpanded ? "gray.50" : "" }, item.children))))))));
};
exports.Accordion = Accordion;
