import type { Meta, StoryObj } from "@storybook/react";
import { Video } from "./index";
declare const meta: Meta<typeof Video>;
export default meta;
type Story = StoryObj<typeof Video>;
export declare const videoDefaultArgs: {
    src: string;
    thumbnailSrc: string;
    embed: boolean;
    ratio: number;
};
export declare const Default: Story;
