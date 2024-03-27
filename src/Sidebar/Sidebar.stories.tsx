import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Sidebar } from "./index";
import {
  Md10K,
  MdBuild,
  MdCurrencyExchange,
  MdDocumentScanner,
  MdDownload,
  MdFileCopy,
  MdPerson,
  MdPerson2,
  MdRadar,
  MdSettings,
  MdShoppingBag,
  MdShoppingCart,
  MdWarehouse,
  MdWeb,
} from "react-icons/md";
import {
  Alert,
  AlertDescription,
  AlertTitle,
  Box,
  Button,
  Flex,
  Image,
} from "@chakra-ui/react";

const meta: Meta<typeof Sidebar> = {
  component: Sidebar,
  title: "Navigation / Sidebar",
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
  args: {
    itemsAs: "a",
    items: [
      {
        title: "Sales",
        icon: <MdCurrencyExchange />,
        href: "/orders",
        isActive: false,

        children: [
          {
            title: "Orders",
            href: "/orders",
            isActive: true,
          },
          {
            title: "Invoices",
            href: "/invoices",
            isActive: false,
          },
        ],
      },
      {
        title: "Products",
        icon: <MdShoppingCart />,
        href: "/products",
        isActive: false,
      },
      {
        title: "Customers",
        icon: <MdPerson />,
        href: "/customers",
        isActive: false,
      },
      {
        title: "Documents",
        icon: <MdDocumentScanner />,
        href: "/customers",
        isActive: false,
      },
      {
        title: "Files",
        icon: <MdFileCopy />,
        href: "/customers",
        isActive: false,
      },
      {
        title: "Warehouse",
        icon: <MdWarehouse />,
        href: "/customers",
        isActive: false,
      },
      {
        title: "Cost center",
        icon: <MdBuild />,
        href: "/customers",
        isActive: false,
      },
      {
        title: "Settings",
        icon: <MdSettings />,
        href: "/customers",
        isActive: false,
      },
      {
        title: "Partners",
        icon: <MdPerson2 />,
        href: "/customers",
        isActive: false,
      },
      {
        title: "Downloads",
        icon: <MdDownload />,
        href: "/customers",
        isActive: false,
      },
      {
        title: "Websites",
        icon: <MdWeb />,
        href: "/customers",
        isActive: false,
      },
      {
        title: "Actions",
        icon: <MdRadar />,
        href: "/customers",
        isActive: false,
      },
    ],
    extra: (
      <>
        <Flex
          padding={"1rem"}
          height={"150px"}
          background={"red"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          extra field
        </Flex>
      </>
    ),
  },
};
