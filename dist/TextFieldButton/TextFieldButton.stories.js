"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsLoading = exports.Default = void 0;
const index_1 = require("./index");
const meta = {
    component: index_1.TextFieldButton,
    title: "Forms / TextFieldButton",
};
exports.default = meta;
exports.Default = {
    args: {
        label: "Email",
        buttonLabel: "Submit",
        placeholder: "Enter your email",
        onSubmit: (value) => console.log(value),
    },
};
exports.IsLoading = {
    args: {
        label: "Email",
        buttonLabel: "Submit",
        placeholder: "Enter your email",
        onSubmit: (value) => console.log(value),
        isLoading: true,
    },
};
