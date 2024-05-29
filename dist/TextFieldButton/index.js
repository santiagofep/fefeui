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
exports.TextFieldButton = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const react_2 = require("@chakra-ui/react");
const TextFieldButton = ({ label, buttonLabel, onSubmit, isLoading, placeholder, isSkeleton, initialValue = "", clearValueOnSubmit = true, helperText, }) => {
    const [value, setValue] = (0, react_1.useState)(initialValue);
    (0, react_1.useEffect)(() => {
        setValue(initialValue);
    }, [initialValue]);
    return (React.createElement(react_2.Skeleton, { isLoaded: !isSkeleton },
        React.createElement("form", { onSubmit: (e) => {
                e.preventDefault();
                onSubmit(value);
                if (clearValueOnSubmit) {
                    setValue("");
                }
            } },
            React.createElement(react_2.Flex, null,
                React.createElement(react_2.FormControl, null,
                    React.createElement(react_2.FormLabel, null, label),
                    React.createElement(react_2.InputGroup, null,
                        React.createElement(react_2.Input, { value: value, required: true, placeholder: placeholder, onChange: (e) => setValue(e.target.value) }),
                        React.createElement(react_2.Button, { isLoading: isLoading, type: "submit", ml: "0.5rem" }, buttonLabel)),
                    helperText && React.createElement(react_2.FormHelperText, null, helperText))))));
};
exports.TextFieldButton = TextFieldButton;
