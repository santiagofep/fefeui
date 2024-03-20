"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsLoading = exports.Default = void 0;
const index_1 = __importDefault(require("./index"));
const meta = {
    component: index_1.default,
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
