import * as React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { ChipInput } from "./index";
import { MdTag } from "react-icons/md";

const meta: Meta<typeof ChipInput> = {
  component: ChipInput,
  title: "Forms / ChipInput",
};

export default meta;

type Story = StoryObj<typeof ChipInput>;

export const Default: Story = {
  args: {
    label: "Label",
    buttonLabel: "Button",
    isLoading: false,
    placeholder: "Placeholder",
    values: ["value1", "value2", "value3", "value4", "value5"],
    onAdd: (value: string) => console.log(`onAdd: ${value}`),
    onRemove: (value: string) => console.log(`onRemove: ${value}`),
    tagIcon: MdTag,
    helperText: "Helper text",
  },
};
