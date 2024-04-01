import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Page } from "./index";
import { Button } from "@chakra-ui/react";

const meta: Meta<typeof Page> = {
  component: Page,
  title: "Page",
};

export default meta;

type Story = StoryObj<typeof Page>;

export const Default: Story = {
  args: {
    title: "Page title",
    description:
      "An intuitive page layout with a title, description, and optional back button. It's flexible with adjustable width and supports additional content.",
    children: "Page content",
    maxWidth: "container.lg",
  },
};

export const GoBack: Story = {
  args: {
    title: "Page title",
    description:
      "An intuitive page layout with a title, description, and optional back button. It's flexible with adjustable width and supports additional content.",
    children: "Page content",
    maxWidth: "container.lg",
    onGoBack: () => console.log("Go back"),
  },
};

export const Actions: Story = {
  args: {
    title: "Page title",
    description:
      "An intuitive page layout with a title, description, and optional back button. It's flexible with adjustable width and supports additional content.",
    children: "Page content",
    maxWidth: "container.lg",
    onGoBack: () => console.log("Go back"),
    actions: <Button variant={"solid"}>Primary action</Button>,
  },
};
