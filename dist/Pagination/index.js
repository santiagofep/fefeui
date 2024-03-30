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
exports.Pagination = void 0;
const react_1 = require("@chakra-ui/react");
const React = __importStar(require("react"));
const md_1 = require("react-icons/md");
const Pagination = ({ next, previous, totalCount, pageCount, itemsName = "items", onChange, }) => {
    const getCurrentPage = () => {
        if (!previous) {
            return 1;
        }
        else {
            const url = new URL(previous);
            return parseInt(url.searchParams.get("page") || "1") + 1;
        }
    };
    const onClick = (urlString) => {
        if (!urlString)
            return;
        const url = new URL(urlString);
        onChange(url.searchParams);
    };
    return (React.createElement(react_1.Flex, { justifyContent: "space-between" },
        React.createElement(react_1.Box, null, totalCount ? (React.createElement("span", null,
            totalCount,
            " ",
            itemsName)) : null),
        React.createElement(react_1.HStack, null,
            React.createElement(react_1.IconButton, { "aria-label": "Previous", icon: React.createElement(md_1.MdChevronLeft, null), isDisabled: !previous, onClick: () => {
                    onClick(previous);
                } }),
            React.createElement(react_1.IconButton, { "aria-label": "Next", icon: React.createElement(md_1.MdChevronRight, null), isDisabled: !next, onClick: () => {
                    onClick(next);
                } })),
        React.createElement(react_1.Box, null, pageCount ? (React.createElement("span", null,
            "Page ",
            getCurrentPage(),
            " of ",
            Math.ceil(totalCount / pageCount))) : null)));
};
exports.Pagination = Pagination;
