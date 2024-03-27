import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Header } from "./index";

const meta: Meta<typeof Header> = {
  component: Header,
  title: "Navigation / Header",
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    hamburger: {
      display: "flex",
      onClick: () => console.log("Hamburger clicked"),
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
};
