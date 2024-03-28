import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { TutorialCard } from "./index";

const meta: Meta<typeof TutorialCard> = {
  component: TutorialCard,
  title: "Tutorials / TutorialCard",
};

export default meta;
type Story = StoryObj<typeof TutorialCard>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const WithVideo: Story = {
  args: {
    title: "Configure this section of your app",
    description:
      "Streamline your shopping with personalized product recommendations and swift checkout.",
    onClose: () => console.log("closed"),
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
      url: "https://www.youtube.com/embed/_flqrzcGhrE?si=owU7OBckmCVeHNvW",
    },
  },
};

export const WithoutVideo: Story = {
  args: {
    title: "Configure this section of your app",
    description:
      "Streamline your shopping with personalized product recommendations and swift checkout.",
    onClose: () => console.log("closed"),
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
  },
};
