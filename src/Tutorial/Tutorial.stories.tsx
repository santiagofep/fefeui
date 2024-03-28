import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Tutorial } from "./index";

const meta: Meta<typeof Tutorial> = {
  component: Tutorial,
  title: "Tutorials / Tutorial",
};

export default meta;

type Story = StoryObj<typeof Tutorial>;

export const Default: Story = {
  args: {
    maxW: "450px",
    title: "Configure this section of your app",
    description:
      "Streamline your shopping with personalized product recommendations and swift checkout.",
    button1: {
      children: "Learn More",
      as: "a",
      href: "https://www.google.com",
      target: "_blank",
    },
    button2: {
      children: "Got it!",
      onClick: () => console.log("clicked"),
    },
    video: {
      src: "https://www.youtube.com/embed/_flqrzcGhrE?si=owU7OBckmCVeHNvW",
    },
  },
};
