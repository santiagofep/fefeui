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
exports.Select = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const react_2 = require("@chakra-ui/react");
const Select = ({ label, options, value, helperText, onChange, isInvalid, emptyOption, normalizeLabelSeparator, isSkeleton, }) => {
    const [useMonospace, setUseMonospace] = (0, react_1.useState)(false);
    const normalizedOptions = React.useMemo(() => {
        if (normalizeLabelSeparator) {
            setUseMonospace(true);
            return normalizeStringsinObjectArray([...options], "label", normalizeLabelSeparator);
        }
        return options;
    }, [options]);
    return (React.createElement(react_2.Skeleton, { isLoaded: !isSkeleton },
        React.createElement(react_2.FormControl, { isInvalid: isInvalid },
            label && React.createElement(react_2.FormLabel, null, label),
            React.createElement(react_2.Select, { value: value, onChange: (e) => {
                    onChange(e.target.value);
                } },
                emptyOption && React.createElement("option", { value: "" }, emptyOption),
                normalizedOptions.map((option, index) => {
                    return (React.createElement("option", { value: option.value, key: index, disabled: option.isDisabled, style: {
                            fontFamily: useMonospace ? "monospace" : "inherit",
                        } }, option.label));
                })),
            helperText && React.createElement(react_2.FormHelperText, null, helperText))));
};
exports.Select = Select;
const normalizeStringsinObjectArray = (objectArray, key, separator = "|") => {
    let maxLength = [];
    for (let i = 0; i < objectArray.length; i++) {
        // @ts-ignore
        const item = objectArray[i][key];
        const itemParts = item.split(separator);
        for (let j = 0; j < itemParts.length; j++) {
            if (maxLength[j] === undefined) {
                maxLength[j] = 0;
            }
            maxLength[j] = Math.max(maxLength[j], itemParts[j].length);
        }
    }
    for (let i = 0; i < objectArray.length; i++) {
        // @ts-ignore
        const item = objectArray[i][key];
        const itemParts = item.split(separator);
        for (let j = 0; j < itemParts.length; j++) {
            itemParts[j] = itemParts[j].padEnd(maxLength[j], ".");
        }
        let newItem = itemParts.join(separator);
        // @ts-ignore
        objectArray[i][key] = newItem;
    }
    return objectArray;
};
