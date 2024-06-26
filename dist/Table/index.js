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
const Table = ({ headings, rows, isSkeleton, skeletonRows = 5, skeletonHeight = "20px", variant, size, headingReplace, emptyData, }) => {
    const styles = (0, react_1.useMultiStyleConfig)("FefeTable", { variant });
    const skeletonArray = Array.from({ length: skeletonRows }, (_, index) => index);
    const itemsCount = rows.length;
    return (React.createElement(react_1.Box, { position: "relative" },
        headingReplace && (React.createElement(react_1.Box, { position: "sticky", top: 0, left: 0, right: 0, zIndex: 1, background: "white" }, headingReplace)),
        React.createElement(react_1.Table, { size: size },
            !headingReplace && (React.createElement(react_1.Thead, { background: "gray.50" },
                React.createElement("tr", null, headings.map((heading) => (React.createElement(react_1.Th, { key: heading.key, padding: heading.padding },
                    React.createElement(react_1.Flex, { alignItems: "center", width: "full", justify: heading.justify },
                        heading.title,
                        " ",
                        heading.rightAddon && (React.createElement(react_1.Box, { marginLeft: "0.25rem" }, heading.rightAddon))))))))),
            React.createElement(react_1.Tbody, null,
                isSkeleton &&
                    skeletonArray.map((index) => (React.createElement(react_1.Tr, { key: index }, headings.map((heading, index) => (React.createElement(react_1.Td, { key: index },
                        React.createElement(react_1.Skeleton, { height: skeletonHeight }))))))),
                !isSkeleton && (React.createElement(React.Fragment, null, rows.map((row, index) => {
                    return (React.createElement(react_1.Tr, { key: index }, headings.map((heading, index) => (React.createElement(react_1.Td, { key: index, padding: heading.padding },
                        React.createElement(react_1.Flex, { w: "full", justify: heading.justify }, row[heading.key].value))))));
                }))))),
        !isSkeleton && itemsCount === 0 && (React.createElement(react_1.Center, { border: "1px solid", borderTop: 0, borderColor: "gray.100" },
            React.createElement(react_1.VStack, { my: 20, spacing: 0 },
                React.createElement(react_1.Heading, { size: "md" }, emptyData === null || emptyData === void 0 ? void 0 : emptyData.title),
                React.createElement(react_1.Box, null, emptyData === null || emptyData === void 0 ? void 0 : emptyData.description))))));
};
exports.Table = Table;
