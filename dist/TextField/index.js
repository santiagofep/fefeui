"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextField = void 0;
const React = require("react");
const react_1 = require("@chakra-ui/react");
const TextField = ({ label, placeholder, value, onChange, type, helperText, }) => {
    return (React.createElement(react_1.FormControl, null,
        label && React.createElement(react_1.FormLabel, null, label),
        React.createElement(react_1.Input, { value: value, onChange: (e) => {
                onChange(e.target.value);
            }, type: type, placeholder: placeholder }),
        helperText && React.createElement(react_1.FormHelperText, null, helperText)));
};
exports.TextField = TextField;
