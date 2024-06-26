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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tutorial = void 0;
const React = __importStar(require("react"));
const react_1 = require("@chakra-ui/react");
const Video_1 = require("../Video");
const Tutorial = (_a) => {
    var { title, description, video, button1, button2, buttonsWrap } = _a, props = __rest(_a, ["title", "description", "video", "button1", "button2", "buttonsWrap"]);
    return (React.createElement(react_1.Box, Object.assign({ width: "100%" }, props),
        React.createElement(react_1.VStack, { align: "stretch", spacing: 3 },
            video && React.createElement(Video_1.Video, Object.assign({}, video)),
            React.createElement(react_1.Heading, { size: "md" }, title),
            description && React.createElement(react_1.Box, null, description),
            React.createElement(react_1.HStack, { spacing: 3, wrap: buttonsWrap },
                button1 && React.createElement(react_1.Button, Object.assign({ width: "full" }, button1)),
                button2 && React.createElement(react_1.Button, Object.assign({ width: "full" }, button2))))));
};
exports.Tutorial = Tutorial;
