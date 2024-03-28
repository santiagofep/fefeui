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
exports.Video = void 0;
const React = __importStar(require("react"));
const react_1 = require("@chakra-ui/react");
const md_1 = require("react-icons/md");
const Video = ({ src, thumbnailSrc, embed, ratio = 16 / 9, }) => {
    const { isOpen, onOpen, onClose } = (0, react_1.useDisclosure)();
    return (React.createElement(React.Fragment, null,
        React.createElement(react_1.Box, { position: "relative", width: "100%" },
            React.createElement(react_1.Box, null,
                React.createElement(react_1.AspectRatio, { ratio: ratio },
                    React.createElement(react_1.Image, { src: thumbnailSrc, alt: "Thumbnail" })),
                React.createElement(react_1.Box, { bg: "blackAlpha.700" // Semi-transparent black background
                    , position: "absolute" // Position it over the content
                    , top: 0, right: 0, bottom: 0, left: 0 })),
            React.createElement(react_1.IconButton, { "aria-label": "", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", onClick: onOpen },
                React.createElement(md_1.MdPlayArrow, null))),
        React.createElement(react_1.Modal, { isOpen: isOpen, onClose: onClose, size: "5xl" },
            React.createElement(react_1.ModalOverlay, null),
            React.createElement(react_1.ModalContent, null,
                React.createElement(react_1.ModalCloseButton, null),
                React.createElement(react_1.ModalHeader, null,
                    React.createElement(react_1.Box, { height: "0.33rem" })),
                React.createElement(react_1.ModalBody, null,
                    React.createElement(react_1.AspectRatio, { ratio: ratio }, embed ? (React.createElement("iframe", { src: src, allowFullScreen: true })) : (React.createElement("video", { controls: true },
                        React.createElement("source", { src: src }))))),
                React.createElement(react_1.ModalFooter, null)))));
};
exports.Video = Video;
