"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Switch = void 0;
const React = require("react");
const react_1 = require("@chakra-ui/react");
const Switch = ({ label, checked, onChange, helperText, }) => {
    return (React.createElement(react_1.FormControl, null,
        React.createElement(react_1.Flex, { alignItems: "center" },
            React.createElement(react_1.Switch, { checked: checked, onChange: () => {
                    onChange(!checked);
                } }),
            label && (React.createElement(react_1.FormLabel, { marginLeft: "0.5rem", marginY: "0" }, label))),
        helperText && React.createElement(react_1.FormHelperText, null, helperText)));
};
exports.Switch = Switch;
