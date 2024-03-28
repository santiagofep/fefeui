import * as React from "react";

import { Meta, StoryObj } from "@storybook/react";

import { Table } from "./index";
import { MdPerson } from "react-icons/md";

const meta: Meta<typeof Table> = {
  component: Table,
  title: "Table",
};

export default meta;

type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
    tableProps: {
      size: "md",
    },
    headings: [
      { title: "Name", key: "name", rightAddon: <MdPerson size={15} /> },
      { title: "Age", key: "age" },
      { title: "Email", key: "email" },
    ],
    rows: [
      {
        name: { value: "John Doe" },
        age: { value: 30 },
        email: { value: "email@test.com" },
      },
      {
        name: { value: "Jane Doe" },
        age: { value: 25 },
        email: { value: "email@test.com" },
      },
    ],
  },
};

export const IsSkeleton: Story = {
  args: {
    tableProps: {
      size: "md",
    },
    headings: [
      { title: "Name", key: "name", rightAddon: <MdPerson size={15} /> },
      { title: "Age", key: "age" },
      { title: "Email", key: "email" },
    ],
    rows: [
      {
        name: { value: "John Doe" },
        age: { value: 30 },
        email: { value: "email@test.com" },
      },
      {
        name: { value: "Jane Doe" },
        age: { value: 25 },
        email: { value: "email@test.com" },
      },
    ],
    isSkeleton: true,
  },
};
