"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const index_1 = require("./index");
const meta = {
    component: index_1.Filter,
    title: "Forms / Filter",
};
exports.default = meta;
exports.Default = {
    args: {
        initialValue: "http://localhost:6006/?search=hello&has_errors=true&status=active&has_invoices=true&from_date=none&to_date=none",
        showSearch: true,
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
        onChange: (newFilterUrl) => {
            console.log("Filter changed", newFilterUrl);
        },
    },
};
