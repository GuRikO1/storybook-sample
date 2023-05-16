import { Meta, StoryObj } from "@storybook/react";

import { Modal, answerButtons } from "./Modal";

const meta = {
  title: "Modal",
  component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    message: "Do you have any questions?",
    buttons: answerButtons,
  },
};
