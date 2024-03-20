"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const index_1 = __importDefault(require("./index"));
const meta = {
    component: index_1.default,
    title: "AlertDialog",
};
exports.default = meta;
exports.Default = {
    args: {
        isOpen: true,
    },
};
