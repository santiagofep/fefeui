import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Video } from "./index";

const meta: Meta<typeof Video> = {
  component: Video,
  title: "Media / Video",
};

export default meta;

type Story = StoryObj<typeof Video>;

export const videoDefaultArgs = {
  src: "https://www.youtube.com/embed/_flqrzcGhrE?si=owU7OBckmCVeHNvW",
  thumbnailSrc: "https://img.youtube.com/vi/_flqrzcGhrE/0.jpg",
  embed: true,
  ratio: 16 / 9,
};

export const Default: Story = {
  args: videoDefaultArgs,
};
