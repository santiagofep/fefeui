import * as React from "react";

import { Meta, StoryObj } from "@storybook/react";

import { TextField } from "./index";

const meta: Meta<typeof TextField> = {
  component: TextField,
  title: "Forms / TextField",
};

export default meta;

type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: {
    label: "Name",
    placeholder: "Enter your name",
    value: "",
    type: "text",
    helperText: "We'll never share your email.",
  },
};
