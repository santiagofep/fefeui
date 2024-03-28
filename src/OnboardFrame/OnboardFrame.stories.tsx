import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { OnboardFrame } from "./index";

const meta: Meta<typeof OnboardFrame> = {
  component: OnboardFrame,
  title: "Onboard / OnboardFrame",
};

export default meta;

type Story = StoryObj<typeof OnboardFrame>;

export const Default: Story = {
  parameters: {
    layout: "fullscreen",
  },
  args: {
    title: "Welcome to the Onboard",
    description: "This is the description of the Onboard",
    tutorial: {
      title: "Tutorial",
      description: "This is the description of the Tutorial",
      video: {
        url: "https://www.youtube.com/embed/1yuc4BI5NWU",
      },
      button1: {
        children: "Button 1",
      },
      button2: {
        children: "Button 2",
      },
    },
    steps: {
      steps: [
        {
          title: "Step 1",
        },
        {
          title: "Step 2",
        },
        {
          title: "Step 3",
        },
        {
          title: "Step 4",
        },
        {
          title: "Step 5",
        },
      ],
      currentStep: 2,
    },
  },
};
