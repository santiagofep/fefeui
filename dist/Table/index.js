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
exports.Table = void 0;
const React = __importStar(require("react"));
const react_1 = require("@chakra-ui/react");
const Table = ({ headings, rows, tableProps, isSkeleton, }) => {
    return (React.createElement(react_1.Table, Object.assign({}, tableProps, { border: "1px solid", borderColor: "gray.200", size: "md" }),
        React.createElement(react_1.Thead, { background: "gray.50" },
            React.createElement("tr", null, headings.map((heading) => (React.createElement(react_1.Th, { key: heading.key },
                React.createElement(react_1.Flex, { alignItems: "center", align: heading.align },
                    heading.title,
                    " ",
                    heading.rightAddon && (React.createElement(react_1.Box, { marginLeft: "0.25rem" }, heading.rightAddon)))))))),
        React.createElement(react_1.Tbody, null, isSkeleton ? ([1, 2, 3, 4, 5].map((index) => (React.createElement(react_1.Tr, { key: index }, headings.map((heading, index) => (React.createElement(react_1.Td, { key: index },
            React.createElement(react_1.Skeleton, { height: "20px" })))))))) : (React.createElement(React.Fragment, null, rows.map((row, index) => {
            return (React.createElement(react_1.Tr, { key: index }, headings.map((heading, index) => (React.createElement(react_1.Td, { key: index, align: heading.align }, row[heading.key].value)))));
        }))))));
};
exports.Table = Table;
