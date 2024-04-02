"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const index_1 = require("./index");
const meta = {
    component: index_1.Switch,
    title: "Forms / Switch",
};
exports.default = meta;
exports.Default = {
    args: {
        label: "Switch label",
        isChecked: false,
        onChange: (newValue) => console.log(newValue),
        helperText: "This is a helper text",
    },
};
