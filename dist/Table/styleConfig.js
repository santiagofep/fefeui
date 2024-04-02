"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FefeTable = void 0;
const react_1 = require("@chakra-ui/react");
const helpers = (0, react_1.createMultiStyleConfigHelpers)(["table", "cells"]);
exports.FefeTable = helpers.defineMultiStyleConfig({
    // The styles all Cards have in common
    baseStyle: {
        table: {
            border: "1px solid",
            borderColor: "gray.200",
            width: "full",
        },
    },
    // Two variants: rounded and smooth
    variants: {
        simple: {
            table: {},
        },
        compact: {
            table: {},
            cells: {
                paddingX: 2,
                paddingY: 3,
            },
        },
    },
    // The default variant value
    defaultProps: {
        variant: "simple",
        size: "lg",
    },
});
