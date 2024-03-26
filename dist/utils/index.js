"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pathWithSearch = void 0;
const pathWithSearch = (urlString) => {
    const url = new URL(urlString);
    return `${url.pathname}${url.search}`;
};
exports.pathWithSearch = pathWithSearch;
