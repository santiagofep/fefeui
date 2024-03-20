"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsGroup = void 0;
const React = require("react");
const react_1 = require("@chakra-ui/react");
const SettingsGroup = ({ title, description, children, borderTop = true, borderBottom = false, id, }) => {
    let settingsGroupId = id ? id + "__" : "";
    settingsGroupId = settingsGroupId + title.toLowerCase().replace(/ /g, "-");
    return (React.createElement(react_1.VStack, { align: "stretch", borderTop: borderTop ? "1px solid" : "", borderBottom: borderBottom ? "1px solid" : "", borderColor: "gray.300", paddingY: 3, spacing: 1, id: settingsGroupId },
        React.createElement(react_1.Heading, { size: "md" }, title),
        React.createElement(react_1.Text, null, description),
        children));
};
exports.SettingsGroup = SettingsGroup;
