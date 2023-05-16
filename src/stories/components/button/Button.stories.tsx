import { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta = {
  title: "Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: "primary",
    label: "Button",
  },
};

export const Secondary: Story = {
  args: {
    type: "secondary",
    label: "Button",
  },
};

export const Danger: Story = {
  args: {
    type: "danger",
    label: "Button",
  },
};
