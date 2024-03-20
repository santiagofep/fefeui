"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Select = void 0;
const React = require("react");
const react_1 = require("@chakra-ui/react");
const Select = ({ label, options, value, helperText, onChange, isInvalid, emptyOption, }) => {
    return (React.createElement(react_1.FormControl, { isInvalid: isInvalid },
        label && React.createElement(react_1.FormLabel, null, label),
        React.createElement(react_1.Select, { value: value, onChange: (e) => {
                onChange(e.target.value);
            } },
            emptyOption && React.createElement("option", { value: "" }, emptyOption),
            options.map((option, index) => {
                return (React.createElement("option", { value: option.value, key: index }, option.label));
            })),
        helperText && React.createElement(react_1.FormHelperText, null, helperText)));
};
exports.Select = Select;
