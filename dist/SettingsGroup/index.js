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
exports.SettingsGroup = void 0;
const React = __importStar(require("react"));
const react_1 = require("@chakra-ui/react");
const SettingsGroup = ({ title, description, children, borderTop = true, borderBottom = false, id, }) => {
    let settingsGroupId = id ? id + "__" : "";
    settingsGroupId = settingsGroupId + title.toLowerCase().replace(/ /g, "-");
    return (React.createElement(react_1.VStack, { align: "stretch", borderTop: borderTop ? "1px solid" : "", borderBottom: borderBottom ? "1px solid" : "", borderColor: "gray.200", paddingY: 5, spacing: 1, id: settingsGroupId },
        React.createElement(react_1.Heading, { size: "md" }, title),
        description && React.createElement(react_1.Text, null, description),
        React.createElement(react_1.VStack, { align: "stretch", paddingY: 4, spacing: 5 }, children)));
};
exports.SettingsGroup = SettingsGroup;
