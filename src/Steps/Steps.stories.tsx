import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Steps } from "./index";

const meta: Meta<typeof Steps> = {
  component: Steps,
  title: "Onboard / Steps",
};

export default meta;

type Story = StoryObj<typeof Steps>;

export const Default: Story = {
  args: {
    steps: [
      {
        title: "Welcome",
        // description: "Welcome to the onboarding process. Let's get started!",
      },
      {
        title: "Requirements",
        // description: "Please make sure you have the following ready.",
      },
      {
        title: "Connect your account",
        // description: "Connect your account to get started.",
      },
      {
        title: "Select your plan",
        // description: "Choose the plan that best fits your needs.",
      },
      {
        title: "Product map settings",
        // description: "Set up your product map settings.",
      },
      {
        title: "Payment methods",
        // description: "Add your payment methods.",
      },
      {
        title: "Document settings",
        // description: "Set up your document settings.",
      },
    ],
    currentStep: 4,
  },
};
