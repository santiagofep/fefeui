import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Video } from "./index";

const meta: Meta<typeof Video> = {
  component: Video,
  title: "Media / Video",
};

export default meta;

type Story = StoryObj<typeof Video>;

export const Default: Story = {
  args: {
    src: "https://www.youtube.com/embed/_flqrzcGhrE?si=owU7OBckmCVeHNvW",
    thumbnailSrc: "https://img.youtube.com/vi/_flqrzcGhrE/0.jpg",
    ratio: 16 / 9,
  },
};
