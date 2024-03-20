"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorderBottom = exports.BorderTop = void 0;
// Import your component here
const index_1 = require("./index");
const meta = {
    component: index_1.SettingsGroup,
    title: "Settings / SettingsGroup",
};
exports.default = meta;
exports.BorderTop = {
    args: {
        id: "settings-group-id",
        title: "Configure this section of your app",
        description: "Streamline your shopping with personalized product recommendations and swift checkout.",
    },
};
exports.BorderBottom = {
    args: {
        id: "settings-group-id",
        title: "Configure this section of your app",
        description: "Streamline your shopping with personalized product recommendations and swift checkout.",
        borderBottom: true,
    },
};
