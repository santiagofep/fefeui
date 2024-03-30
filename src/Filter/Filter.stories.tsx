import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Filter } from "./index";

const meta: Meta<typeof Filter> = {
  component: Filter,
  title: "Forms / Filter",
};

export default meta;

type Story = StoryObj<typeof Filter>;

export const Default: Story = {
  args: {
    urlSearch:
      "?orders=hello&has_errors=true&status=active&has_invoices=true&from_date=none&to_date=none",
    searchBar: {
      searchParam: "orders",
      helperText: "Search for orders",
    },
    options: [
      {
        label: "Initial Date",
        key: "from_date",
        type: "date",
      },
      {
        label: "End Date",
        key: "to_date",
        type: "date",
      },
      {
        label: "Status",
        key: "status",
        values: [
          {
            label: "Active",
            value: "active",
          },
          {
            label: "Inactive",
            value: "inactive",
          },
        ],
        type: "select",
      },
      {
        label: "Has errors",
        key: "has_errors",
        values: [
          {
            label: "All",
            value: "all",
          },
          {
            label: "True",
            value: "true",
          },
          {
            label: "False",
            value: "false",
          },
        ],
        type: "select",
      },
      {
        label: "Has invoices",
        key: "has_invoices",
        values: [
          {
            label: "All",
            value: "all",
          },
          {
            label: "True",
            value: "true",
          },
          {
            label: "False",
            value: "false",
          },
        ],
        type: "select",
      },
    ],
    onChange: (urlSearch) => {
      console.log("Filter changed", urlSearch.toString());
    },
  },
};
