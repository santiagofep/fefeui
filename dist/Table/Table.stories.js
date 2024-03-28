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
exports.IsSkeleton = exports.Default = void 0;
const React = __importStar(require("react"));
const index_1 = require("./index");
const md_1 = require("react-icons/md");
const meta = {
    component: index_1.Table,
    title: "Table",
};
exports.default = meta;
exports.Default = {
    args: {
        tableProps: {
            size: "md",
        },
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
        tableProps: {
            size: "md",
        },
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
        isSkeleton: true,
    },
};
