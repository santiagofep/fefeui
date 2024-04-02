"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoNext = exports.NoPrevious = exports.Default = void 0;
const index_1 = require("./index");
const meta = {
    component: index_1.Pagination,
    title: "Navigation / Pagination",
};
exports.default = meta;
exports.Default = {
    args: {
        next: "https://api.example.com/v1/?page=11",
        previous: "https://api.example.com/v1/?page=9",
        pageCount: 10,
        totalCount: 102,
        onChange: (newPath) => {
            console.log(newPath.toString());
        },
    },
};
exports.NoPrevious = {
    args: {
        next: "https://api.example.com/v1/?page=3",
        previous: null,
        pageCount: 10,
        totalCount: 100,
        onChange: (newPath) => {
            console.log(newPath.toString());
        },
    },
};
exports.NoNext = {
    args: {
        next: null,
        previous: "https://api.example.com/v1/?page=10&search=hello",
        pageCount: 10,
        totalCount: 102,
        onChange: (newPath) => {
            console.log(newPath.toString());
        },
    },
};
