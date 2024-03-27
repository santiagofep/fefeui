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
exports.Header = void 0;
const React = __importStar(require("react"));
const react_1 = require("@chakra-ui/react");
const md_1 = require("react-icons/md");
const Header = (_a) => {
    var { hamburger, logo, notifications, user, justifyContent = "space-between", backgroundColor = "gray.100", height = "63px", alignItems = "center", paddingX = "0.5rem", width = "100%" } = _a, props = __rest(_a, ["hamburger", "logo", "notifications", "user", "justifyContent", "backgroundColor", "height", "alignItems", "paddingX", "width"]);
    return (React.createElement(react_1.Flex, Object.assign({ justifyContent: justifyContent, backgroundColor: backgroundColor, height: height, alignItems: alignItems, paddingX: paddingX, width: width }, props),
        React.createElement(react_1.HStack, null,
            hamburger && (React.createElement(react_1.Box, { display: hamburger.display },
                React.createElement(react_1.IconButton, { "aria-label": "Open menu", icon: React.createElement(md_1.MdMenu, null), onClick: hamburger.onClick }))),
            React.createElement(react_1.Box, { display: ["none", "block"] },
                React.createElement("a", { href: logo.href },
                    React.createElement(react_1.Image, { src: logo.src, alt: logo.alt, height: logo.height, width: logo.width, fit: "contain" })))),
        user && (React.createElement(react_1.HStack, { paddingY: "0.25rem", paddingX: "0.5rem", backgroundColor: "white", borderRadius: "md", height: "fit-content" },
            React.createElement(react_1.Avatar, { name: user.name, src: user.avatar, size: "sm" }),
            React.createElement(react_1.VStack, { align: "stretch", spacing: 0, lineHeight: "1.25rem", paddingRight: "0.50rem" },
                user.row1 && React.createElement(react_1.Box, null, user.row1),
                user.row2 && React.createElement(react_1.Box, { fontWeight: "600" }, user.row2))))));
};
exports.Header = Header;
