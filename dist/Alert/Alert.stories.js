"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithButton = exports.Default = void 0;
const index_1 = require("./index");
const meta = {
    component: index_1.Alert,
    title: "Disclosure / Alert",
};
exports.default = meta;
exports.Default = {
    args: {
        title: "This is an alert",
        description: "This is the description",
        status: "info",
    },
};
exports.WithButton = {
    args: {
        title: "This is an alert",
        description: "This is the description",
        status: "info",
        button: {
            children: "Action",
        },
    },
};
