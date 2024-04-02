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
const md_1 = require("react-icons/md");
const Video_1 = require("../Video");
const Video_stories_1 = require("../Video/Video.stories");
const meta = {
    component: index_1.Accordion,
    title: "Accordion",
};
exports.default = meta;
exports.Default = {
    args: {
        items: [
            {
                leftIcon: React.createElement(md_1.MdClose, { color: "red" }),
                title: "Item 1",
                children: React.createElement(Video_1.Video, Object.assign({}, Video_stories_1.videoDefaultArgs)),
            },
            {
                leftIcon: React.createElement(md_1.MdCheck, { color: "green" }),
                title: "Item 1",
                children: "Content 1",
            },
        ],
    },
};
