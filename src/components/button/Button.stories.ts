import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic button story
export const Default: Story = {
  args: {
    children: "Button Text",
  },
};

// Disabled button story
export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    disabled: true,
  },
};
