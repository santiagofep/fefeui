import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Switch } from "./index";

const meta: Meta<typeof Switch> = {
  component: Switch,
  title: "Forms / Switch",
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    label: "Switch label",
    checked: false,
    onChange: (newValue) => console.log(newValue),
    helperText: "This is a helper text",
  },
};
