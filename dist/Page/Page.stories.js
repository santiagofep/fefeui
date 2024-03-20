"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoBack = exports.Default = void 0;
const index_1 = require("./index");
const meta = {
    component: index_1.Page,
    title: "Page",
};
exports.default = meta;
exports.Default = {
    args: {
        title: "Page title",
        description: "An intuitive page layout with a title, description, and optional back button. It's flexible with adjustable width and supports additional content.",
        children: "Page content",
        maxWidth: "container.lg",
    },
};
exports.GoBack = {
    args: {
        title: "Page title",
        description: "An intuitive page layout with a title, description, and optional back button. It's flexible with adjustable width and supports additional content.",
        children: "Page content",
        maxWidth: "container.lg",
        goBack: () => console.log("Go back"),
    },
};
