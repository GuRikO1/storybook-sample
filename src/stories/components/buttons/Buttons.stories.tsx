import { Meta, StoryObj } from "@storybook/react";

import { Buttons, exampleButtons } from "./Buttons";

const meta = {
  title: "Buttons",
  component: Buttons,
} satisfies Meta<typeof Buttons>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    size: "small",
    buttons: exampleButtons,
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
    buttons: exampleButtons,
  },
};

export const Large: Story = {
  args: {
    size: "large",
    buttons: exampleButtons,
  },
};
