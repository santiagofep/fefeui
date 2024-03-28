"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const index_1 = require("./index");
const meta = {
    component: index_1.OnboardFrame,
    title: "Onboard / OnboardFrame",
};
exports.default = meta;
exports.Default = {
    parameters: {
        layout: "fullscreen",
    },
    args: {
        title: "Welcome to the Onboard",
        description: "This is the description of the Onboard",
        tutorial: {
            title: "Tutorial",
            description: "This is the description of the Tutorial",
            video: {
                url: "https://www.youtube.com/embed/1yuc4BI5NWU",
            },
            button1: {
                children: "Button 1",
            },
            button2: {
                children: "Button 2",
            },
        },
        steps: {
            steps: [
                {
                    title: "Step 1",
                },
                {
                    title: "Step 2",
                },
                {
                    title: "Step 3",
                },
                {
                    title: "Step 4",
                },
                {
                    title: "Step 5",
                },
            ],
            currentStep: 2,
        },
    },
};
