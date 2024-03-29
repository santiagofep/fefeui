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
const React = __importStar(require("react"));
const react_1 = require("@chakra-ui/react");
const md_1 = require("react-icons/md");
const utils_1 = require("./utils");
const ButtonInner = ({ title, isExternal }) => {
    return (React.createElement(react_1.Flex, { width: "100%", alignItems: "center" },
        title,
        isExternal && React.createElement(md_1.MdOpenInNew, { size: 10, style: { marginLeft: "4px" } })));
};
const SidebarItem = ({ children, title, icon, href, isActive, to, as = "a", target = "_self", colorScheme = "gray", }) => {
    const childrenIsActive = (children && children.some((child) => child.isActive)) || false;
    return (React.createElement(React.Fragment, null,
        React.createElement(react_1.Button, { colorScheme: colorScheme, width: "100%", variant: (0, utils_1.getButtonVariant)(isActive, childrenIsActive), leftIcon: icon, rightIcon: children ? React.createElement(md_1.MdArrowDropDown, null) : undefined, size: "sm", as: as, href: href, target: target, to: to },
            React.createElement(ButtonInner, { title: title, isExternal: target === "_blank" })),
        children && (React.createElement(react_1.Collapse, { in: childrenIsActive },
            React.createElement(react_1.VStack, { align: "stretch", marginLeft: "1.5rem", spacing: 1 }, children.map((child, index) => {
                return (React.createElement(react_1.Button, { colorScheme: colorScheme, key: index, size: "sm", variant: (0, utils_1.getButtonVariant)(child.isActive, false), as: as, href: child.href, target: child.target, to: child.to },
                    React.createElement(react_1.Flex, { width: "100%", alignItems: "center" },
                        React.createElement(ButtonInner, { title: child.title, isExternal: child.target === "_blank" }))));
            }))))));
};
exports.default = SidebarItem;
