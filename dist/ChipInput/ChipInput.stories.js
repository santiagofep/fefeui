"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const index_1 = require("./index");
const md_1 = require("react-icons/md");
const meta = {
    component: index_1.ChipInput,
    title: "Forms / ChipInput",
};
exports.default = meta;
exports.Default = {
    args: {
        label: "Label",
        buttonLabel: "Button",
        isLoading: false,
        placeholder: "Placeholder",
        values: ["value1", "value2", "value3", "value4", "value5"],
        onAdd: (value) => console.log(`onAdd: ${value}`),
        onRemove: (value) => console.log(`onRemove: ${value}`),
        tagIcon: md_1.MdTag,
    },
};
