"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const index_1 = require("./index");
const meta = {
    component: index_1.TextField,
    title: "Forms / TextField",
};
exports.default = meta;
exports.Default = {
    args: {
        label: "Name",
        placeholder: "Enter your name",
        value: "",
        type: "text",
        helperText: "We'll never share your email.",
    },
};
