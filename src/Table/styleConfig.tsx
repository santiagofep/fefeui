import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const helpers = createMultiStyleConfigHelpers(["table", "cells"]);

export const FefeTable = helpers.defineMultiStyleConfig({
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
