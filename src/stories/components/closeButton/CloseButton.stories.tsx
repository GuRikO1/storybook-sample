import { Meta, StoryObj } from "@storybook/react";

import CloseButton from "./CloseButton";

const meta = {
  title: "CloseButton",
  component: CloseButton,
} satisfies Meta<typeof CloseButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onClick: () => {},
  },
};
