"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TutorialCard = void 0;
const React = require("react");
const react_1 = require("@chakra-ui/react");
const md_1 = require("react-icons/md");
const TutorialCard = ({ title, description, video, onClose, button1, button2, }) => {
    return (React.createElement(react_1.Box, { position: "relative" },
        React.createElement(react_1.HStack, { justifyContent: "space-between", borderRadius: "md", overflow: "hidden", shadow: "md", flexWrap: ["wrap", "nowrap"], flexDirection: ["column-reverse", "column-reverse", "row"] },
            React.createElement(react_1.VStack, { align: "stretch", padding: 5, spacing: 2 },
                React.createElement(react_1.Heading, { size: "md" }, title),
                React.createElement(react_1.Text, null, description),
                button1 || button2 ? (React.createElement(react_1.HStack, null,
                    button1 && (React.createElement(react_1.Button, Object.assign({ size: "sm" }, button1.buttonProps), button1.label)),
                    button2 && (React.createElement(react_1.Button, Object.assign({ size: "sm" }, button2.buttonProps), button2.label)))) : null),
            React.createElement(react_1.AspectRatio, { ratio: 16 / 9, minW: "300px", width: ["100%", "100%", "fit-content"] }, video ? (React.createElement("iframe", { src: video.url, allowFullScreen: true })) : (React.createElement(react_1.Image, { src: "https://cdn.shopify.com/s/files/1/0628/3047/7483/files/2150836116.jpg?v=1710883876", objectFit: "cover" })))),
        onClose && (React.createElement(react_1.IconButton, { "aria-label": "", position: "absolute", top: "0.25rem", right: "0.25rem", size: "xs", onClick: onClose },
            React.createElement(md_1.MdClose, null)))));
};
exports.TutorialCard = TutorialCard;
