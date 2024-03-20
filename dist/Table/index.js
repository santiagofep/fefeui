"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = void 0;
const React = require("react");
const react_1 = require("@chakra-ui/react");
const Table = ({ headings, rows, tableProps }) => {
    return (<react_1.Table {...tableProps}>
      <react_1.Thead>
        <tr>
          {headings.map((heading) => (<react_1.Th key={heading.key}>
              <react_1.Flex alignItems={"center"} align={heading.align}>
                {heading.title}{" "}
                {heading.rightAddon && (<react_1.Box marginLeft={"0.25rem"}>{heading.rightAddon}</react_1.Box>)}
              </react_1.Flex>
            </react_1.Th>))}
        </tr>
      </react_1.Thead>
      <react_1.Tbody>
        {rows.map((row, index) => {
            return (<react_1.Tr key={index}>
              {headings.map((heading, index) => (<react_1.Td key={index} align={heading.align}>
                  {row[heading.key].value}
                </react_1.Td>))}
            </react_1.Tr>);
        })}
      </react_1.Tbody>
    </react_1.Table>);
};
exports.Table = Table;
