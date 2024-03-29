import * as React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { PriceTable } from "./index";

const Meta: Meta<typeof PriceTable> = {
  component: PriceTable,
  title: "PriceTable",
};

export default Meta;

type Story = StoryObj<typeof PriceTable>;

export const Default: Story = {
  args: {
    data: [
      {
        title: "Basic",
        price: 10,
        paymentFrequency: "per month",
        features: ["Feature 1", "Feature 2", "Feature 3"],
        isActive: false,
        onClick: () => {},
        isRecomented: false,
      },
      {
        title: "Basic",
        price: 20,
        paymentFrequency: "per month",
        features: [
          "Feature 1",
          "Feature 2",
          "Feature 3",
          "Feature 4",
          "Feature 5",
          "Feature 6",
        ],
        isActive: true,
        onClick: () => {},
        isRecomented: false,
        isLoading: true,
        trial: "7 días de prueba",
      },
      {
        title: "Basic",
        price: 30,
        paymentFrequency: "per month",
        features: ["Feature 1", "Feature 2", "Feature 3"],
        isActive: false,
        onClick: () => {},
        isRecomented: true,
      },
    ],
  },
};
