"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelperTextError = exports.HelperText = exports.Default = void 0;
const index_1 = require("./index");
const meta = {
    component: index_1.Select,
    title: "Forms / Select",
};
exports.default = meta;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
exports.Default = {
    args: {
        label: "Select",
        value: "",
        onChange: () => { },
        emptyOption: "Select an option",
        options: [
            {
                value: "1",
                label: "Option 1",
            },
            {
                value: "2",
                label: "Option 2",
            },
            {
                value: "3",
                label: "Option 3",
            },
        ],
    },
};
exports.HelperText = {
    args: {
        label: "Select",
        value: "",
        helperText: "This is a helper text",
        onChange: () => { },
        options: [
            {
                value: "1",
                label: "Option 1",
            },
            {
                value: "2",
                label: "Option 2",
            },
            {
                value: "3",
                label: "Option 3",
            },
        ],
    },
};
exports.HelperTextError = {
    args: {
        label: "Select",
        value: "",
        helperText: "This is a helper text",
        isInvalid: true,
        onChange: () => { },
        options: [
            {
                value: "1",
                label: "Option 1",
            },
            {
                value: "2",
                label: "Option 2",
            },
            {
                value: "3",
                label: "Option 3",
            },
        ],
    },
};
