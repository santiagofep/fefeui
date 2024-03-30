"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CenteredFullPage = void 0;
const react_1 = require("@chakra-ui/react");
const helpers = (0, react_1.createMultiStyleConfigHelpers)(["wrapper", "inner", "center"]);
exports.CenteredFullPage = helpers.defineMultiStyleConfig({
    // The styles all Cards have in common
    baseStyle: {
        wrapper: { minHeight: "100vh" },
        center: { minHeight: "70vh" },
        inner: {},
    },
    // Two variants: rounded and smooth
    variants: {
        ghost: {
            wrapper: {
                bgGradient: "linear(to-br, brand.300, brand.500, brand.800)",
            },
            inner: {},
        },
    },
    // The default variant value
    defaultProps: {
        variant: "ghost",
    },
});
