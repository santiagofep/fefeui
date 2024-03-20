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
exports.ChipInput = void 0;
const React = __importStar(require("react"));
const TextFieldButton_1 = require("../TextFieldButton");
const react_1 = require("@chakra-ui/react");
const md_1 = require("react-icons/md");
const ChipInput = ({ label, buttonLabel, isLoading, placeholder, values, onAdd, onRemove, tagIcon, }) => {
    return (React.createElement(React.Fragment, null,
        React.createElement(TextFieldButton_1.TextFieldButton, { label: label, buttonLabel: buttonLabel, isLoading: isLoading, placeholder: placeholder, onSubmit: (value) => onAdd(value) }),
        React.createElement(react_1.HStack, { paddingY: "1rem" }, values.map((value, index) => {
            return (React.createElement(react_1.Tag, { key: index, size: "lg" },
                tagIcon && React.createElement(react_1.TagLeftIcon, { as: tagIcon }),
                React.createElement(react_1.TagLabel, null, value),
                React.createElement(react_1.TagRightIcon, { as: md_1.MdClose, onClick: () => onRemove(value), cursor: "pointer" })));
        }))));
};
exports.ChipInput = ChipInput;
