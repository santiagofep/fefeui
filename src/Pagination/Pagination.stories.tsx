import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Pagination } from "./index";

const meta: Meta<typeof Pagination> = {
  component: Pagination,
  title: "Navigation / Pagination",
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {
    next: "https://api.example.com/v1/?page=11",
    previous: "https://api.example.com/v1/?page=9",
    pageCount: 10,
    totalCount: 102,
    onChange: (newPath) => {
      console.log(newPath.toString());
    },
  },
};

export const NoPrevious: Story = {
  args: {
    next: "https://api.example.com/v1/?page=3",
    previous: null,
    pageCount: 10,
    totalCount: 100,
    onChange: (newPath) => {
      console.log(newPath.toString());
    },
  },
};

export const NoNext: Story = {
  args: {
    next: null,
    previous: "https://api.example.com/v1/?page=10&search=hello",
    pageCount: 10,
    totalCount: 102,
    onChange: (newPath) => {
      console.log(newPath.toString());
    },
  },
};
