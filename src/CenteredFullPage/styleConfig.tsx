import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const helpers = createMultiStyleConfigHelpers(["wrapper", "inner", "center"]);

export const CenteredFullPage = helpers.defineMultiStyleConfig({
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
      inner: {
        maxWidth: "container.md",
      },
    },
  },
  // The default variant value
  defaultProps: {
    variant: "ghost",
  },
});
