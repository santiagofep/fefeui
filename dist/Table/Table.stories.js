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
exports.Empty = exports.ComplexTable = exports.IsSkeleton = exports.Default = void 0;
const React = __importStar(require("react"));
const index_1 = require("./index");
const md_1 = require("react-icons/md");
const react_1 = require("@chakra-ui/react");
const meta = {
    component: index_1.Table,
    title: "Table",
};
exports.default = meta;
exports.Default = {
    args: {
        headings: [
            { title: "Name", key: "name", rightAddon: React.createElement(md_1.MdPerson, { size: 15 }) },
            { title: "Age", key: "age" },
            { title: "Email", key: "email" },
        ],
        rows: [
            {
                name: { value: "John Doe" },
                age: { value: 30 },
                email: { value: "email@test.com" },
            },
            {
                name: { value: "Jane Doe" },
                age: { value: 25 },
                email: { value: "email@test.com" },
            },
        ],
    },
};
exports.IsSkeleton = {
    args: {
        headings: [
            { title: "Name", key: "name", rightAddon: React.createElement(md_1.MdPerson, { size: 15 }) },
            { title: "Age", key: "age" },
            { title: "Email", key: "email" },
        ],
        rows: [],
        isSkeleton: true,
        skeletonHeight: "30px",
    },
};
exports.ComplexTable = {
    args: {
        size: "sm",
        variant: "compact",
        headings: [
            { title: React.createElement(react_1.Checkbox, null), key: "checkbox", padding: "1rem 0 1rem 1rem" },
            { title: "Name", key: "name", rightAddon: React.createElement(md_1.MdPerson, { size: 15 }) },
            { title: "Age", key: "age" },
            { title: "Email", key: "email" },
            { title: "Email", key: "email2" },
            { title: "Email", key: "email3", justify: "center" },
            { title: "Actions", key: "actions", justify: "flex-end" },
        ],
        rows: [1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => {
            return {
                checkbox: { value: React.createElement(react_1.Checkbox, { key: index }) },
                name: { value: "Un nombre muy largo" },
                age: { value: 30 },
                email: {
                    value: (React.createElement(react_1.Tag, { size: "sm", colorScheme: "green" }, "Active Active Active Active Active")),
                },
                email2: {
                    value: (React.createElement(react_1.VStack, null,
                        React.createElement(react_1.Tag, { size: "sm", colorScheme: "green" }, "Active Active Active"),
                        React.createElement(react_1.Tag, { size: "sm", colorScheme: "red" }, "Active Active Active"))),
                },
                email3: {
                    value: (React.createElement(react_1.Tag, { size: "sm", colorScheme: "green" }, "Active Active Active")),
                },
                actions: {
                    value: (React.createElement(react_1.HStack, null,
                        React.createElement(react_1.IconButton, { "aria-label": "Edit", icon: React.createElement(md_1.MdPerson, null) }),
                        React.createElement(react_1.IconButton, { "aria-label": "Edit", icon: React.createElement(md_1.MdPerson, null) }),
                        React.createElement(react_1.IconButton, { "aria-label": "Edit", icon: React.createElement(md_1.MdPerson, null) }))),
                },
            };
        }),
        headingReplace: (React.createElement(react_1.Flex, { justifyContent: "space-between" },
            React.createElement(react_1.Box, null, "Replace"),
            React.createElement(react_1.HStack, null,
                React.createElement(react_1.Button, { variant: "outline" }, "Button"),
                React.createElement(react_1.Button, { variant: "outline" }, "Button")))),
    },
};
exports.Empty = {
    args: {
        size: "sm",
        variant: "compact",
        headings: [
            { title: React.createElement(react_1.Checkbox, null), key: "checkbox", padding: "1rem 0 1rem 1rem" },
            { title: "Name", key: "name", rightAddon: React.createElement(md_1.MdPerson, { size: 15 }) },
            { title: "Age", key: "age" },
            { title: "Email", key: "email" },
            { title: "Email", key: "email2" },
            { title: "Email", key: "email3", justify: "center" },
            { title: "Actions", key: "actions", justify: "flex-end" },
        ],
        rows: [],
        emptyData: {
            title: "No data",
            description: "There is no data to display",
        },
    },
};
