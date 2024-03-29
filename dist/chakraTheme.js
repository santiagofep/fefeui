"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.theme = void 0;
const react_1 = require("@chakra-ui/react");
exports.theme = (0, react_1.extendTheme)({
    colors: {
        brand: {
            "50": "#EFEFF6",
            "100": "#D1D1E6",
            "200": "#B3B3D5",
            "300": "#9696C5",
            "400": "#7878B5",
            "500": "#5A5AA5",
            "600": "#484884",
            "700": "#363663",
            "800": "#242442",
            "900": "#121221",
        },
    },
    components: {
        Button: {
            baseStyle: {},
            defaultProps: {
                colorScheme: "brand",
            },
        },
    },
});
