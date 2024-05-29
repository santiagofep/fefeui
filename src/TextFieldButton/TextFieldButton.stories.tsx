import * as React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { TextFieldButton } from "./index";

const meta: Meta<typeof TextFieldButton> = {
  component: TextFieldButton,
  title: "Forms / TextFieldButton",
};

export default meta;

type Story = StoryObj<typeof TextFieldButton>;

export const Default: Story = {
  args: {
    label: "Email",
    buttonLabel: "Submit",
    placeholder: "Enter your email",
    onSubmit: (value) => console.log(value),
    helperText: "We'll never share your email.",
  },
};

export const IsLoading: Story = {
  args: {
    label: "Email",
    buttonLabel: "Submit",
    placeholder: "Enter your email",
    onSubmit: (value) => console.log(value),
    isLoading: true,
  },
};
