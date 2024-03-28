import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { OnboardFrame } from "./index";
import { Container, List, ListItem, VStack } from "@chakra-ui/react";

import { TextField } from "../TextField";
import { RightButton } from "../RightButton";

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
      description: (
        <List>
          <ListItem>Step 1: Do this</ListItem>
          <ListItem>Step 2: Do this</ListItem>
          <ListItem>Step 3: Do this</ListItem>
        </List>
      ),
      video: {
        src: "https://www.youtube.com/embed/1yuc4BI5NWU",
        thumbnailSrc: "https://img.youtube.com/vi/1yuc4BI5NWU/0.jpg",
        embed: true,
      },
      button1: {
        children: "Button 1",
      },
      button2: {
        children: "Button 2",
      },
    },
    steps: {
      onStepClick: (step: number) => {
        console.log(step);
      },
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
    children: (
      <VStack spacing={2.5} align={"stretch"}>
        <TextField
          label="Name"
          type="text"
          placeholder="Enter your name"
          value=""
          onChange={() => {}}
        />
        <TextField
          label="Name"
          type="text"
          placeholder="Enter your name"
          value=""
          onChange={() => {}}
        />
        <RightButton>Next</RightButton>
      </VStack>
    ),
    logo: {
      marginX: "auto",
      src: "https://integracion-siigo.moship.io/static/frontend/dist/moship-logo-8863c36b37fac88c840f0740eddccc2e.png",
      height: "50px",
    },
  },
};

export const NoTutorial: Story = {
  parameters: {
    layout: "fullscreen",
  },
  args: {
    title: "Welcome to the Onboard",
    description: "This is the description of the Onboard",
    steps: {
      onStepClick: (step: number) => {
        console.log(step);
      },
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
      currentStep: 1,
    },
    children: (
      <VStack spacing={2.5} align={"stretch"}>
        <TextField
          label="Name"
          type="text"
          placeholder="Enter your name"
          value=""
          onChange={() => {}}
        />
        <TextField
          label="Name"
          type="text"
          placeholder="Enter your name"
          value=""
          onChange={() => {}}
        />
        <RightButton>Next</RightButton>
      </VStack>
    ),
    contentMaxWidth: "container.sm",
    logo: {
      marginX: "auto",
      src: "https://integracion-siigo.moship.io/static/frontend/dist/moship-logo-8863c36b37fac88c840f0740eddccc2e.png",
      height: "50px",
    },
  },
};
