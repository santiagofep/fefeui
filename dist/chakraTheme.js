"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.theme = void 0;
const react_1 = require("@chakra-ui/react");
exports.theme = (0, react_1.extendTheme)({
    colors: {
        brand: {
            100: "#f7fafc",
            900: "#1a202c",
        },
    },
    components: {
        Button: {
            baseStyle: {
                colorScheme: "teal",
            },
        },
    },
});
