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
exports.TutorialCard = void 0;
const React = __importStar(require("react"));
const react_1 = require("@chakra-ui/react");
const md_1 = require("react-icons/md");
const Video_1 = require("../Video");
const TutorialCard = ({ title, description, video, onClose, button1, button2, shadow = "md", }) => {
    return (React.createElement(react_1.Box, { position: "relative" },
        React.createElement(react_1.HStack, { justifyContent: "space-between", borderRadius: "md", overflow: "hidden", shadow: shadow, flexWrap: ["wrap", "nowrap"], flexDirection: ["column-reverse", "column-reverse", "row"] },
            React.createElement(react_1.VStack, { align: "stretch", padding: 5, spacing: 2 },
                React.createElement(react_1.Heading, { size: "md" }, title),
                React.createElement(react_1.Text, null, description),
                button1 || button2 ? (React.createElement(react_1.HStack, null,
                    button1 && React.createElement(react_1.Button, Object.assign({ size: "sm" }, button1)),
                    button2 && React.createElement(react_1.Button, Object.assign({ size: "sm" }, button2)))) : null),
            React.createElement(react_1.Box, { minW: "300px", width: ["100%", "100%", "fit-content"] }, video ? (React.createElement(Video_1.Video, Object.assign({}, video))) : (React.createElement(react_1.AspectRatio, { ratio: 16 / 9 },
                React.createElement(react_1.Image, { src: "https://cdn.shopify.com/s/files/1/0628/3047/7483/files/2150836116.jpg?v=1710883876", objectFit: "cover" }))))),
        onClose && (React.createElement(react_1.IconButton, { "aria-label": "", position: "absolute", top: "0.25rem", right: "0.25rem", size: "xs", onClick: onClose },
            React.createElement(md_1.MdClose, null)))));
};
exports.TutorialCard = TutorialCard;
