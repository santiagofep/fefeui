"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceTable = void 0;
const react_1 = require("@chakra-ui/react");
const React = __importStar(require("react"));
const md_1 = require("react-icons/md");
const PriceTable = ({ data, selectButtonText = "Activate", selectedButtonText = "Current plan", recomendedText = "Recomended", gradient = "linear(to-br, blue.300, purple.300, purple.800, blue.500)", }) => {
    return (React.createElement(react_1.HStack, { align: "stretch" }, data.map((item, index) => {
        var _a;
        return (React.createElement(react_1.Box, { key: index, padding: item.isRecomented ? "2px 2px 2px 2px" : "0px 0px 0px 0px", bgGradient: gradient, borderRadius: "md", shadow: "md", maxW: "400px", width: "100%" },
            React.createElement(react_1.VStack, { position: "relative", justifyContent: "start", align: "stretch", padding: "1rem", background: "#fff", borderRadius: "md", height: item.trial ? "calc(100% - 1.5rem)" : "100%" },
                React.createElement(react_1.Heading, { size: "lg" }, item.title),
                React.createElement(react_1.Box, { lineHeight: "2rem" },
                    React.createElement(react_1.Text, { fontSize: "4xl" },
                        "$",
                        item.price),
                    item.paymentFrequency && React.createElement(react_1.Text, null, item.paymentFrequency)),
                React.createElement(react_1.Button, { onClick: item.onClick, isDisabled: item.isActive, isLoading: item.isLoading }, item.isActive ? selectedButtonText : selectButtonText),
                ((_a = item.features) === null || _a === void 0 ? void 0 : _a.length) > 0 && (React.createElement(React.Fragment, null,
                    React.createElement(react_1.Box, { my: 1 },
                        React.createElement(react_1.Divider, null)),
                    React.createElement(react_1.List, null, item.features.map((feature, index) => {
                        return (React.createElement(react_1.ListItem, { key: index },
                            React.createElement(react_1.ListIcon, { as: md_1.MdCheck, color: "green.500" }),
                            feature));
                    })))),
                item.isRecomented && (React.createElement(react_1.Text, { fontSize: "sm", fontWeight: "bold", position: "absolute", top: "0.5rem", right: "0.5rem", bgGradient: gradient, paddingX: "0.25rem", borderRadius: "md", color: "white" }, recomendedText))),
            item.trial && (React.createElement(react_1.Box, { textAlign: "center", color: "white", fontWeight: "500" }, item.trial))));
    })));
};
exports.PriceTable = PriceTable;
