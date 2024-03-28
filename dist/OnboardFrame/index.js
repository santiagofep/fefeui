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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnboardFrame = void 0;
const React = __importStar(require("react"));
const Steps_1 = require("../Steps");
const react_1 = require("@chakra-ui/react");
const Tutorial_1 = require("../Tutorial");
const OnboardFrame = (_a) => {
    var { title, description, tutorial, steps, children, width = "100%", height = "100vh", marginTop = "1.5rem" } = _a, props = __rest(_a, ["title", "description", "tutorial", "steps", "children", "width", "height", "marginTop"]);
    const { isOpen, onClose, onOpen } = (0, react_1.useDisclosure)();
    return (React.createElement(react_1.Box, Object.assign({ width: width, height: height, marginTop: marginTop }, props),
        React.createElement(react_1.VStack, { align: "stretch", spacing: 5, width: "100%" },
            React.createElement(Steps_1.Steps, Object.assign({}, steps)),
            React.createElement(react_1.Container, { maxW: "container.lg" },
                React.createElement(react_1.VStack, { align: "stretch", spacing: 2, width: "100%" },
                    React.createElement(react_1.Heading, { size: "md" }, title),
                    React.createElement(react_1.Box, null, description),
                    React.createElement(react_1.Box, null,
                        React.createElement(react_1.Button, { onClick: onOpen }, "Ver gu\u00EDa")))),
            React.createElement(react_1.Container, { maxW: "container.lg" }, children)),
        React.createElement(react_1.Drawer, { isOpen: isOpen, onClose: onClose, size: "lg" },
            React.createElement(react_1.DrawerOverlay, null),
            React.createElement(react_1.DrawerContent, null,
                React.createElement(react_1.DrawerCloseButton, null),
                React.createElement(react_1.DrawerHeader, null, "Gu\u00EDa de uso"),
                React.createElement(react_1.DrawerBody, null,
                    React.createElement(Tutorial_1.Tutorial, Object.assign({}, tutorial)))))));
};
exports.OnboardFrame = OnboardFrame;
