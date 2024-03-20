"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsGroup = void 0;
const React = require("react");
const react_1 = require("@chakra-ui/react");
const SettingsGroup = ({ title, description, children, borderTop = true, borderBottom = false, id, }) => {
    let settingsGroupId = id ? id + "__" : "";
    settingsGroupId = settingsGroupId + title.toLowerCase().replace(/ /g, "-");
    return (<react_1.VStack align={"stretch"} borderTop={borderTop ? "1px solid" : ""} borderBottom={borderBottom ? "1px solid" : ""} borderColor={"gray.300"} paddingY={3} spacing={1} id={settingsGroupId}>
      <react_1.Heading size="md">{title}</react_1.Heading>
      <react_1.Text>{description}</react_1.Text>
      {children}
    </react_1.VStack>);
};
exports.SettingsGroup = SettingsGroup;
