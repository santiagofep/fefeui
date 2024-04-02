"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithoutVideo = exports.WithVideo = void 0;
const index_1 = require("./index");
const meta = {
    component: index_1.TutorialCard,
    title: "Tutorials / TutorialCard",
};
exports.default = meta;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
exports.WithVideo = {
    args: {
        title: "Configure this section of your app",
        description: "Streamline your shopping with personalized product recommendations and swift checkout.",
        onClose: () => console.log("closed"),
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
            src: "https://www.youtube.com/embed/1yuc4BI5NWU",
            thumbnailSrc: "https://img.youtube.com/vi/1yuc4BI5NWU/0.jpg",
            embed: true,
        },
    },
};
exports.WithoutVideo = {
    args: {
        title: "Configure this section of your app",
        description: "Streamline your shopping with personalized product recommendations and swift checkout.",
        onClose: () => console.log("closed"),
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
    },
};
