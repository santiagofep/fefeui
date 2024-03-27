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
    component: index_1.Sidebar,
    title: "Navigation / Sidebar",
};
exports.default = meta;
exports.Default = {
    args: {
        itemsAs: "a",
        items: [
            {
                title: "Sales",
                icon: React.createElement(md_1.MdCurrencyExchange, null),
                href: "/orders",
                isActive: false,
                children: [
                    {
                        title: "Orders",
                        href: "/orders",
                        isActive: true,
                    },
                    {
                        title: "Invoices",
                        href: "/invoices",
                        isActive: false,
                        target: "_blank",
                    },
                ],
            },
            {
                title: "Products",
                icon: React.createElement(md_1.MdShoppingCart, null),
                href: "/products",
                isActive: false,
            },
            {
                title: "Customers",
                icon: React.createElement(md_1.MdPerson, null),
                href: "/customers",
                isActive: false,
                target: "_blank",
            },
            {
                title: "Documents",
                icon: React.createElement(md_1.MdDocumentScanner, null),
                href: "/customers",
                isActive: false,
            },
            {
                title: "Files",
                icon: React.createElement(md_1.MdFileCopy, null),
                href: "/customers",
                isActive: false,
            },
            {
                title: "Warehouse",
                icon: React.createElement(md_1.MdWarehouse, null),
                href: "/customers",
                isActive: false,
            },
            {
                title: "Cost center",
                icon: React.createElement(md_1.MdBuild, null),
                href: "/customers",
                isActive: false,
            },
            {
                title: "Settings",
                icon: React.createElement(md_1.MdSettings, null),
                href: "/customers",
                isActive: false,
            },
            {
                title: "Partners",
                icon: React.createElement(md_1.MdPerson2, null),
                href: "/customers",
                isActive: false,
            },
            {
                title: "Downloads",
                icon: React.createElement(md_1.MdDownload, null),
                href: "/customers",
                isActive: false,
            },
            {
                title: "Websites",
                icon: React.createElement(md_1.MdWeb, null),
                href: "/customers",
                isActive: false,
            },
            {
                title: "Actions",
                icon: React.createElement(md_1.MdRadar, null),
                href: "/customers",
                isActive: false,
            },
        ],
        extra: (React.createElement(React.Fragment, null,
            React.createElement(react_1.Flex, { padding: "1rem", height: "150px", background: "red", justifyContent: "center", alignItems: "center" }, "extra field"))),
    },
};
