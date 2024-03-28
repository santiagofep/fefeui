import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { DashboardFrame } from "./index";
import { sidebarArgs } from "../Sidebar/Sidebar.stories";
import { Container } from "@chakra-ui/react";

const meta: Meta<typeof DashboardFrame> = {
  component: DashboardFrame,
  title: "Dashboard / DashboardFrame",
};

export default meta;

type Story = StoryObj<typeof DashboardFrame>;

export const Default: Story = {
  args: {
    header: {
      hamburger: {
        display: ["block", "block", "none"],
        onClick: () => {},
      },
      logo: {
        src: "https://integracion-siigo.moship.io/static/frontend/dist/moship-logo-8863c36b37fac88c840f0740eddccc2e.png",
        alt: "Logo",
        href: "/",
        height: "40px",
      },
      user: {
        name: "",
        row1: "Integración Siigo Shopify",
        row2: "Shop name",
      },
    },
    sidebar: sidebarArgs,
    children: (
      <Container
        maxW={"container.xl"}
        paddingY={"0.5rem"}
        height={"200vh"}
        background={"gray.200"}
      >
        Content
      </Container>
    ),
  },
};
