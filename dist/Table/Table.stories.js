"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const React = require("react");
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
