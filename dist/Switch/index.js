"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Switch = void 0;
const React = require("react");
const react_1 = require("@chakra-ui/react");
const Switch = ({ label, checked, onChange, helperText, }) => {
    return (<react_1.FormControl>
      <react_1.Flex alignItems={"center"}>
        <react_1.Switch checked={checked} onChange={() => {
            onChange(!checked);
        }}/>
        {label && (<react_1.FormLabel marginLeft={"0.5rem"} marginY="0">
            {label}
          </react_1.FormLabel>)}
      </react_1.Flex>
      {helperText && <react_1.FormHelperText>{helperText}</react_1.FormHelperText>}
    </react_1.FormControl>);
};
exports.Switch = Switch;
