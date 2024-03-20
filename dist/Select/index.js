"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Select = void 0;
const React = require("react");
const react_1 = require("@chakra-ui/react");
const Select = ({ label, options, value, helperText, onChange, isInvalid, emptyOption, }) => {
    return (<react_1.FormControl isInvalid={isInvalid}>
      {label && <react_1.FormLabel>{label}</react_1.FormLabel>}
      <react_1.Select value={value} onChange={(e) => {
            onChange(e.target.value);
        }}>
        {emptyOption && <option value="">{emptyOption}</option>}
        {options.map((option, index) => {
            return (<option value={option.value} key={index}>
              {option.label}
            </option>);
        })}
      </react_1.Select>
      {helperText && <react_1.FormHelperText>{helperText}</react_1.FormHelperText>}
    </react_1.FormControl>);
};
exports.Select = Select;
