import * as React from "react";

import { Meta, StoryObj } from "@storybook/react";

import { Table } from "./index";
import { MdPerson } from "react-icons/md";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  HStack,
  IconButton,
  Tag,
  VStack,
} from "@chakra-ui/react";

const meta: Meta<typeof Table> = {
  component: Table,
  title: "Table",
};

export default meta;

type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
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
    skeletonHeight: "30px",
  },
};

export const ComplexTable: Story = {
  args: {
    size: "sm",
    variant: "compact",
    headings: [
      { title: <Checkbox />, key: "checkbox", padding: "1rem 0 1rem 1rem" },
      { title: "Name", key: "name", rightAddon: <MdPerson size={15} /> },
      { title: "Age", key: "age" },
      { title: "Email", key: "email" },
      { title: "Email", key: "email2" },
      { title: "Email", key: "email3", justify: "center" },
      { title: "Actions", key: "actions", justify: "flex-end" },
    ],
    rows: [1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => {
      return {
        checkbox: { value: <Checkbox key={index} /> },
        name: { value: "Un nombre muy largo" },
        age: { value: 30 },
        email: {
          value: (
            <Tag size={"sm"} colorScheme={"green"}>
              Active Active Active Active Active
            </Tag>
          ),
        },
        email2: {
          value: (
            <VStack>
              <Tag size={"sm"} colorScheme={"green"}>
                Active Active Active
              </Tag>
              <Tag size={"sm"} colorScheme={"red"}>
                Active Active Active
              </Tag>
            </VStack>
          ),
        },
        email3: {
          value: (
            <Tag size={"sm"} colorScheme={"green"}>
              Active Active Active
            </Tag>
          ),
        },
        actions: {
          value: (
            <HStack>
              <IconButton aria-label="Edit" icon={<MdPerson />} />
              <IconButton aria-label="Edit" icon={<MdPerson />} />
              <IconButton aria-label="Edit" icon={<MdPerson />} />
            </HStack>
          ),
        },
      };
    }),
    headingReplace: (
      <Flex justifyContent={"space-between"}>
        <Box>Replace</Box>
        <HStack>
          <Button variant={"outline"}>Button</Button>
          <Button variant={"outline"}>Button</Button>
        </HStack>
      </Flex>
    ),
  },
};
