"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Page = void 0;
const React = require("react");
const react_1 = require("@chakra-ui/react");
const md_1 = require("react-icons/md");
const Page = ({ title, description, children, maxWidth, goBack, }) => {
    return (React.createElement(react_1.Container, { maxWidth: maxWidth },
        React.createElement(react_1.VStack, { align: "stretch" },
            React.createElement(react_1.Flex, { alignItems: "center" },
                goBack && (React.createElement(react_1.IconButton, { "aria-label": "Go back", onClick: goBack, marginRight: "0.5rem", size: "sm" },
                    React.createElement(md_1.MdArrowBack, null))),
                React.createElement(react_1.Heading, { size: "lg" }, title)),
            React.createElement(react_1.Text, null, description),
            React.createElement(react_1.Divider, null),
            React.createElement(react_1.Box, null, children))));
};
exports.Page = Page;
