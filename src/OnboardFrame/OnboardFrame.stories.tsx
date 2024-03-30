import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { OnboardFrame } from "./index";
import { Container, List, ListItem, VStack } from "@chakra-ui/react";

import { TextField } from "../TextField";
import { RightButton } from "../RightButton";

const meta: Meta<typeof OnboardFrame> = {
  component: OnboardFrame,
  title: "Frame / OnboardFrame",
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
        children: "Como crear forma de pago en Siigo",
        as: "a",
        href: "https://siigonube.portaldeclientes.siigo.com/crear-formas-de-pago/#:~:text=Para%20configurar%20o%20crear%20las,formas%20de%20pago%20previamente%20creadas.",
        target: "_blank",
      },
      button2: {
        children: "Ver formas de pago en Siigo",
        as: "a",
        href: "https://siigonube.siigo.com/#/paymentmeans/",
        target: "_blank",
      },
    },
    steps: {
      onStepClick: (step: number) => {
        console.log(step);
      },
      steps: [
        {
          title: "Hola, te damos la bienvenida",
        },
        {
          title: "Necesario para iniciar",
        },
        {
          title: "Conecta tu cuenta",
        },
        {
          title: "Selecciona tu plan",
        },
        {
          title: "Configuración de Productos",
        },
        {
          title: "Configuración de Formas de pago",
        },
        {
          title: "Resolución de facturación",
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
