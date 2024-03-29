import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const helpers = createMultiStyleConfigHelpers(["wrapper"]);

export const TutorialCard = helpers.defineMultiStyleConfig({
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
