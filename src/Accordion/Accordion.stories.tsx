import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Accordion } from "./index";
import { MdCheck, MdClose } from "react-icons/md";
import { Video } from "../Video";
import { videoDefaultArgs } from "../Video/Video.stories";

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  title: "Accordion",
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {
    items: [
      {
        leftIcon: <MdClose color="red" />,
        title: "Item 1",
        children: <Video {...videoDefaultArgs} />,
      },
      {
        leftIcon: <MdCheck color="green" />,
        title: "Item 1",
        children: "Content 1",
      },
    ],
  },
};
