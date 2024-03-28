"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const React = __importStar(require("react"));
const index_1 = require("./index");
const react_1 = require("@chakra-ui/react");
const TextField_1 = require("../TextField");
const RightButton_1 = require("../RightButton");
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
            description: (React.createElement(react_1.List, null,
                React.createElement(react_1.ListItem, null, "Step 1: Do this"),
                React.createElement(react_1.ListItem, null, "Step 2: Do this"),
                React.createElement(react_1.ListItem, null, "Step 3: Do this"))),
            video: {
                src: "https://www.youtube.com/embed/1yuc4BI5NWU",
                thumbnailSrc: "https://img.youtube.com/vi/1yuc4BI5NWU/0.jpg",
                embed: true,
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
        children: (React.createElement(react_1.VStack, { spacing: 2.5, align: "stretch" },
            React.createElement(TextField_1.TextField, { label: "Name", type: "text", placeholder: "Enter your name", value: "", onChange: () => { } }),
            React.createElement(TextField_1.TextField, { label: "Name", type: "text", placeholder: "Enter your name", value: "", onChange: () => { } }),
            React.createElement(RightButton_1.RightButton, null, "Next"))),
    },
};
