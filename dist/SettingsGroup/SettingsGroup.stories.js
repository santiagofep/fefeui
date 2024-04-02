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
exports.BorderBottom = exports.BorderTop = void 0;
const React = __importStar(require("react"));
// Import your component here
const index_1 = require("./index");
const Select_1 = require("../Select");
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
        children: (React.createElement(React.Fragment, null,
            React.createElement(Select_1.Select, { label: "Default currency", value: "USD", onChange: () => { }, options: [
                    { label: "USD", value: "USD" },
                    { label: "EUR", value: "EUR" },
                    { label: "GBP", value: "GBP" },
                ] }),
            React.createElement(Select_1.Select, { label: "Default currency", value: "USD", onChange: () => { }, options: [
                    { label: "USD", value: "USD" },
                    { label: "EUR", value: "EUR" },
                    { label: "GBP", value: "GBP" },
                ] }))),
    },
};
