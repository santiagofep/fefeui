"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = void 0;
const React = require("react");
const react_1 = require("@chakra-ui/react");
const Table = ({ headings, rows, tableProps }) => {
    return (React.createElement(react_1.Table, Object.assign({}, tableProps),
        React.createElement(react_1.Thead, null,
            React.createElement("tr", null, headings.map((heading) => (React.createElement(react_1.Th, { key: heading.key },
                React.createElement(react_1.Flex, { alignItems: "center", align: heading.align },
                    heading.title,
                    " ",
                    heading.rightAddon && (React.createElement(react_1.Box, { marginLeft: "0.25rem" }, heading.rightAddon)))))))),
        React.createElement(react_1.Tbody, null, rows.map((row, index) => {
            return (React.createElement(react_1.Tr, { key: index }, headings.map((heading, index) => (React.createElement(react_1.Td, { key: index, align: heading.align }, row[heading.key].value)))));
        }))));
};
exports.Table = Table;
