import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { DashboardFrame } from "./index";
import { MdDashboard } from "react-icons/md";
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
    sidebar: {
      items: [
        {
          title: "Dashboard",
          icon: <MdDashboard />,
          href: "/",
          isActive: true,
        },
        {
          title: "Settings",
          icon: <MdDashboard />,
          href: "/settings",
          isActive: false,
        },
      ],
    },
    children: (
      <Container maxW={"container.xl"} paddingY={"0.5rem"}>
        Content
      </Container>
    ),
  },
};
