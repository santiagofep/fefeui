import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";

// Import your component here
import { SettingsGroup } from "./index";
import { Select } from "../Select";

const meta: Meta<typeof SettingsGroup> = {
  component: SettingsGroup,
  title: "Settings / SettingsGroup",
};

export default meta;
type Story = StoryObj<typeof SettingsGroup>;

export const BorderTop: Story = {
  args: {
    id: "settings-group-id",
    title: "Configure this section of your app",
    description:
      "Streamline your shopping with personalized product recommendations and swift checkout.",
  },
};

export const BorderBottom: Story = {
  args: {
    id: "settings-group-id",
    title: "Configure this section of your app",
    description:
      "Streamline your shopping with personalized product recommendations and swift checkout.",
    borderBottom: true,
    children: (
      <>
        <Select
          label="Default currency"
          value="USD"
          onChange={() => {}}
          options={[
            { label: "USD", value: "USD" },
            { label: "EUR", value: "EUR" },
            { label: "GBP", value: "GBP" },
          ]}
        />
        <Select
          label="Default currency"
          value="USD"
          onChange={() => {}}
          options={[
            { label: "USD", value: "USD" },
            { label: "EUR", value: "EUR" },
            { label: "GBP", value: "GBP" },
          ]}
        />
      </>
    ),
  },
};
