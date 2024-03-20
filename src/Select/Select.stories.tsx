import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Select } from "./index";

const meta: Meta<typeof Select> = {
  component: Select,
  title: "Forms / Select",
};

export default meta;
type Story = StoryObj<typeof Select>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  args: {
    label: "Select",
    value: "",
    onChange: () => {},
    emptyOption: "Select an option",
    options: [
      {
        value: "1",
        label: "Option 1",
      },
      {
        value: "2",
        label: "Option 2",
      },
      {
        value: "3",
        label: "Option 3",
      },
    ],
  },
};

export const HelperText: Story = {
  args: {
    label: "Select",
    value: "",
    helperText: "This is a helper text",
    onChange: () => {},
    options: [
      {
        value: "1",
        label: "Option 1",
      },
      {
        value: "2",
        label: "Option 2",
      },
      {
        value: "3",
        label: "Option 3",
      },
    ],
  },
};

export const HelperTextError: Story = {
  args: {
    label: "Select",
    value: "",
    helperText: "This is a helper text",
    isInvalid: true,
    onChange: () => {},
    options: [
      {
        value: "1",
        label: "Option 1",
      },
      {
        value: "2",
        label: "Option 2",
      },
      {
        value: "3",
        label: "Option 3",
      },
    ],
  },
};

export const Normalized: Story = {
  args: {
    label: "Select",
    value: "",
    helperText: "This is a helper text",
    onChange: () => {},
    normalizeLabelSeparator: "|",
    options: [
      {
        value: "1",
        label: "Option 1 | Option 1",
      },
      {
        value: "2",
        label: "Option 2222 | Option 2",
      },
      {
        value: "3",
        label: "Option 3 | Option 3",
        isDisabled: true,
      },
    ],
  },
};
