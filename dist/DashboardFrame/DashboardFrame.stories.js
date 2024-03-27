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
const react_1 = require("@chakra-ui/react");
const meta = {
    component: index_1.DashboardFrame,
    title: "Dashboard / DashboardFrame",
};
exports.default = meta;
exports.Default = {
    args: {
        header: {
            hamburger: {
                display: ["block", "block", "none"],
                onClick: () => { },
            },
            logo: {
                src: "https://integracion-siigo.moship.io/static/frontend/dist/moship-logo-8863c36b37fac88c840f0740eddccc2e.png",
                alt: "Logo",
                href: "/",
                height: "40px",
            },
            user: {
                name: "",
                row1: "Integración Siigo Shopify",
                row2: "Shop name",
            },
        },
        sidebar: {
            items: [
                {
                    title: "Dashboard",
                    icon: React.createElement(md_1.MdDashboard, null),
                    href: "/",
                    isActive: true,
                },
                {
                    title: "Settings",
                    icon: React.createElement(md_1.MdDashboard, null),
                    href: "/settings",
                    isActive: false,
                },
            ],
        },
        children: (React.createElement(react_1.Container, { maxW: "container.xl", paddingY: "0.5rem" }, "Content")),
    },
};
