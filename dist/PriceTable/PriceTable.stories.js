"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const index_1 = require("./index");
const Meta = {
    component: index_1.PriceTable,
    title: "PriceTable",
};
exports.default = Meta;
exports.Default = {
    args: {
        data: [
            {
                title: "Basic",
                price: 10,
                paymentFrequency: "per month",
                features: ["Feature 1", "Feature 2", "Feature 3"],
                isActive: false,
                onClick: () => { },
                isRecomented: false,
            },
            {
                title: "Basic",
                price: 10,
                paymentFrequency: "per month",
                features: ["Feature 1", "Feature 2", "Feature 3"],
                isActive: true,
                onClick: () => { },
                isRecomented: false,
            },
            {
                title: "Basic",
                price: 10,
                paymentFrequency: "per month",
                features: ["Feature 1", "Feature 2", "Feature 3"],
                isActive: false,
                onClick: () => { },
                isRecomented: true,
            },
        ],
    },
};
