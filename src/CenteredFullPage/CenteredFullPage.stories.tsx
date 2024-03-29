import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { CenteredFullPage } from "./index";
import { TutorialCard } from "../TutorialCard";
import { VStack } from "@chakra-ui/react";

const meta: Meta<typeof CenteredFullPage> = {
  component: CenteredFullPage,
  title: "Frame / CenteredFullPage",
};

export default meta;

type Story = StoryObj<typeof CenteredFullPage>;

export const Default: Story = {
  parameters: {
    layout: "fullscreen",
  },
  args: {
    children: (
      <VStack align={"stretch"}>
        <TutorialCard
          title="Welcome to the tutorial"
          description="This is a tutorial card"
        />
        <TutorialCard
          title="Welcome to the tutorial"
          description="This is a tutorial card"
        />
      </VStack>
    ),
  },
};
