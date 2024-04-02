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
exports.DashboardFrame = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const Header_1 = require("../Header");
const Sidebar_1 = require("../Sidebar");
const react_2 = require("@chakra-ui/react");
const DashboardFrame = ({ header, sidebar, children, }) => {
    const [isSidebarOpen, setIsSidebarOpen] = (0, react_1.useState)(false);
    if (!sidebar.width) {
        sidebar.width = "250px";
    }
    if (!header.height) {
        header.height = "60px";
    }
    if (!sidebar.borderRight) {
        sidebar.borderRight = "1px solid";
    }
    if (!sidebar.borderColor) {
        sidebar.borderColor = "gray.200";
    }
    sidebar.height = `calc(100vh - ${header.height})`;
    const sidebarProps = Object.assign({ paddingTop: "0.5rem", display: ["none", "none", "flex"] }, sidebar);
    delete header.hamburger;
    const headerProps = Object.assign({ hamburger: {
            display: ["block", "block", "none"],
            onClick: () => setIsSidebarOpen(!isSidebarOpen),
        } }, header);
    return (React.createElement(react_2.Flex, { flexWrap: "wrap" },
        React.createElement(Header_1.Header, Object.assign({}, headerProps)),
        React.createElement(react_2.Flex, { width: "100%" },
            React.createElement(Sidebar_1.Sidebar, Object.assign({}, sidebarProps)),
            React.createElement(react_2.Box, { width: ["100%", "100%", `calc(100% - ${sidebar.width})`], maxH: sidebar.height, overflowY: "auto" }, children)),
        React.createElement(react_2.Drawer, { isOpen: isSidebarOpen, placement: "left", onClose: () => setIsSidebarOpen(false) },
            React.createElement(react_2.DrawerOverlay, null),
            React.createElement(react_2.DrawerContent, null,
                React.createElement(react_2.DrawerBody, { paddingX: 0, paddingY: "0.5rem" },
                    React.createElement(react_2.VStack, null,
                        React.createElement(react_2.Box, { padding: "0.5rem" },
                            React.createElement(react_2.Image, { src: header.logo.src, alt: header.logo.alt, height: header.logo.height, width: header.logo.width, fit: "contain" })),
                        React.createElement(react_2.Divider, null),
                        React.createElement(Sidebar_1.Sidebar, Object.assign({ width: "100%" }, sidebar))))))));
};
exports.DashboardFrame = DashboardFrame;
