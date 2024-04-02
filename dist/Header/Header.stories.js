"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const index_1 = require("./index");
const meta = {
    component: index_1.Header,
    title: "Navigation / Header",
};
exports.default = meta;
exports.Default = {
    args: {
        hamburger: {
            display: "flex",
            onClick: () => console.log("Hamburger clicked"),
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
};
