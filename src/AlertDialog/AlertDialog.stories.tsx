import * as React from "react";

import { StoryObj, Meta } from "@storybook/react";

import { AlertDialog } from "./index";

const meta: Meta<typeof AlertDialog> = {
  component: AlertDialog,
  title: "Disclosure / AlertDialog",
};

export default meta;

type Story = StoryObj<typeof AlertDialog>;

export const Default: Story = {
  args: {
    isOpen: true,
  },
};
