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
exports.Page = void 0;
const React = __importStar(require("react"));
const react_1 = require("@chakra-ui/react");
const md_1 = require("react-icons/md");
const Page = ({ title, description, children, maxWidth, goBack, }) => {
    return (React.createElement(react_1.Container, { maxWidth: maxWidth },
        React.createElement(react_1.VStack, { align: "stretch" },
            React.createElement(react_1.Flex, { alignItems: "center" },
                goBack && (React.createElement(react_1.IconButton, { "aria-label": "Go back", onClick: goBack, marginRight: "0.5rem", size: "sm" },
                    React.createElement(md_1.MdArrowBack, null))),
                React.createElement(react_1.Heading, { size: "lg" }, title)),
            React.createElement(react_1.Text, null, description),
            React.createElement(react_1.Divider, null),
            React.createElement(react_1.Box, null, children))));
};
exports.Page = Page;
