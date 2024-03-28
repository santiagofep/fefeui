import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Alert } from "./index";

const meta: Meta<typeof Alert> = {
  component: Alert,
  title: "Disclosure / Alert",
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    title: "This is an alert",
    description: "This is the description",
    status: "info",
  },
};

export const WithButton: Story = {
  args: {
    title: "This is an alert",
    description: "This is the description",
    status: "info",
    button: {
      children: "Action",
    },
  },
};
