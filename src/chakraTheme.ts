import { extendTheme, defineStyleConfig, VStack, Td } from "@chakra-ui/react";

import { CenteredFullPage } from "./CenteredFullPage/styleConfig";
import { TutorialCard } from "./TutorialCard/styleConfig";
import { FefeTable } from "./Table/styleConfig";

export const theme = extendTheme({
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
    CenteredFullPage,
    TutorialCard,
    FefeTable,
    Button: {
      baseStyle: {},
      defaultProps: {
        colorScheme: "brand",
      },
    },
  },
});
