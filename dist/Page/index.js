"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Page = void 0;
const React = require("react");
const react_1 = require("@chakra-ui/react");
const md_1 = require("react-icons/md");
const Page = ({ title, description, children, maxWidth, goBack, }) => {
    return (<react_1.Container maxWidth={maxWidth}>
      <react_1.VStack align={"stretch"}>
        <react_1.Flex alignItems={"center"}>
          {goBack && (<react_1.IconButton aria-label="Go back" onClick={goBack} marginRight={"0.5rem"} size={"sm"}>
              <md_1.MdArrowBack />
            </react_1.IconButton>)}
          <react_1.Heading size="lg">{title}</react_1.Heading>
        </react_1.Flex>
        <react_1.Text>{description}</react_1.Text>
        <react_1.Divider />
        <react_1.Box>{children}</react_1.Box>
      </react_1.VStack>
    </react_1.Container>);
};
exports.Page = Page;
