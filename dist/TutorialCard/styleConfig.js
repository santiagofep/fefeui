"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TutorialCard = void 0;
const react_1 = require("@chakra-ui/react");
const helpers = (0, react_1.createMultiStyleConfigHelpers)(["wrapper"]);
exports.TutorialCard = helpers.defineMultiStyleConfig({
    // The styles all Cards have in common
    baseStyle: {
        wrapper: {},
    },
    // Two variants: rounded and smooth
    variants: {
        card: {
            wrapper: {
                shadow: "md",
                borderRadius: "md",
                background: "white",
            },
        },
    },
    // The default variant value
    defaultProps: {
        variant: "card",
    },
});
