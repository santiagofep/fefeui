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
exports.Loading = void 0;
const React = __importStar(require("react"));
const react_1 = require("@chakra-ui/react");
const Loading = ({ image }) => {
    return (React.createElement(react_1.Flex, { width: "100%", height: `calc(100vh - 240px)`, align: "center", justifyContent: "center", position: "fixed", top: "0", left: "0" },
        React.createElement(react_1.VStack, { justifyContent: "center", width: "100%" },
            React.createElement(react_1.Image, { src: image.src, alt: image.alt, height: image.height, marginY: "1rem" }),
            React.createElement(react_1.Box, { minW: "300px" },
                React.createElement(react_1.Progress, { size: "xs", isIndeterminate: true })))));
};
exports.Loading = Loading;
