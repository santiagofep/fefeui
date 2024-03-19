/** @type { import('@storybook/react').Preview } */
import * as React from "react";

import { Provider } from "../src/Provider";

const preview = {
  decorators: [
    (Story) => (
      <Provider>
        <Story />
      </Provider>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
