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
            label: "Learn More",
            buttonProps: {
                as: "a",
                href: "https://www.google.com",
                target: "_blank",
            },
        },
        button2: {
            label: "Got it!",
            buttonProps: {
                onClick: () => console.log("clicked"),
            },
        },
        video: {
            url: "https://www.youtube.com/embed/_flqrzcGhrE?si=owU7OBckmCVeHNvW",
        },
    },
};
exports.WithoutVideo = {
    args: {
        title: "Configure this section of your app",
        description: "Streamline your shopping with personalized product recommendations and swift checkout.",
        onClose: () => console.log("closed"),
        button1: {
            label: "Learn More",
            buttonProps: {
                as: "a",
                href: "https://www.google.com",
                target: "_blank",
            },
        },
        button2: {
            label: "Got it!",
            buttonProps: {
                onClick: () => console.log("clicked"),
            },
        },
    },
};
