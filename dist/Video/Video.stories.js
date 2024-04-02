"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = exports.videoDefaultArgs = void 0;
const index_1 = require("./index");
const meta = {
    component: index_1.Video,
    title: "Media / Video",
};
exports.default = meta;
exports.videoDefaultArgs = {
    src: "https://www.youtube.com/embed/_flqrzcGhrE?si=owU7OBckmCVeHNvW",
    thumbnailSrc: "https://img.youtube.com/vi/_flqrzcGhrE/0.jpg",
    embed: true,
    ratio: 16 / 9,
};
exports.Default = {
    args: exports.videoDefaultArgs,
};
