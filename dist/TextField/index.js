"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextField = void 0;
const React = require("react");
const react_1 = require("@chakra-ui/react");
const TextField = ({ label, placeholder, value, onChange, type, helperText, }) => {
    return (<react_1.FormControl>
      {label && <react_1.FormLabel>{label}</react_1.FormLabel>}
      <react_1.Input value={value} onChange={(e) => {
            onChange(e.target.value);
        }} type={type} placeholder={placeholder}/>
      {helperText && <react_1.FormHelperText>{helperText}</react_1.FormHelperText>}
    </react_1.FormControl>);
};
exports.TextField = TextField;
