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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sidebar = void 0;
const React = __importStar(require("react"));
const react_1 = require("@chakra-ui/react");
const SidebarItem_1 = __importDefault(require("./SidebarItem"));
const Sidebar = (_a) => {
    var { items, itemsAs = "a", extra, overflowY = "auto", overflowX = "hidden", height = "100vh", width = "250px", flexDirection = "column", justifyContent = "space-between" } = _a, props = __rest(_a, ["items", "itemsAs", "extra", "overflowY", "overflowX", "height", "width", "flexDirection", "justifyContent"]);
    return (React.createElement(react_1.Flex, Object.assign({ overflowY: overflowY, overflowX: overflowX, height: height, width: width, flexDirection: flexDirection, justifyContent: justifyContent }, props),
        React.createElement(react_1.VStack, { align: "stretch", paddingX: "0.5rem", width: "100%", marginBottom: "2rem", spacing: 1 }, items.map((item, index) => {
            return React.createElement(SidebarItem_1.default, Object.assign({ as: itemsAs }, item, { key: index }));
        })),
        extra && React.createElement(react_1.Box, null, extra)));
};
exports.Sidebar = Sidebar;
