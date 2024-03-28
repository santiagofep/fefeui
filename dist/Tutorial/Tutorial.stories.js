"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const index_1 = require("./index");
const meta = {
    component: index_1.Tutorial,
    title: "Tutorials / Tutorial",
};
exports.default = meta;
exports.Default = {
    args: {
        maxW: "450px",
        title: "Configure this section of your app",
        description: "Streamline your shopping with personalized product recommendations and swift checkout.",
        button1: {
            children: "Learn More",
            as: "a",
            href: "https://www.google.com",
            target: "_blank",
        },
        button2: {
            children: "Got it!",
            onClick: () => console.log("clicked"),
        },
        video: {
            src: "https://www.youtube.com/embed/_flqrzcGhrE?si=owU7OBckmCVeHNvW",
        },
    },
};
