import { Meta, StoryObj } from "@storybook/react";
import { Table } from "./index";
declare const meta: Meta<typeof Table>;
export default meta;
type Story = StoryObj<typeof Table>;
export declare const Default: Story;
export declare const IsSkeleton: Story;
export declare const ComplexTable: Story;
export declare const Empty: Story;
