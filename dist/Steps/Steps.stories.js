"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const index_1 = require("./index");
const meta = {
    component: index_1.Steps,
    title: "Onboard / Steps",
};
exports.default = meta;
exports.Default = {
    args: {
        steps: [
            {
                title: "Welcome",
                // description: "Welcome to the onboarding process. Let's get started!",
            },
            {
                title: "Requirements",
                // description: "Please make sure you have the following ready.",
            },
            {
                title: "Connect your account",
                // description: "Connect your account to get started.",
            },
            {
                title: "Select your plan",
                // description: "Choose the plan that best fits your needs.",
            },
            {
                title: "Product map settings",
                // description: "Set up your product map settings.",
            },
            {
                title: "Payment methods",
                // description: "Add your payment methods.",
            },
            {
                title: "Document settings",
                // description: "Set up your document settings.",
            },
        ],
        currentStep: 4,
    },
};
