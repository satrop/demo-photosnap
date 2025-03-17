import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { expect, within, fn } from "@storybook/test";
import Card from "./Card";
import Button from "../button/Button";

const meta = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic card with title only
export const Default: Story = {
  args: {
    title: "Simple Card",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const titleElement = canvas.getByText("Simple Card");
    await expect(titleElement).toBeTruthy();
  },
};

// Card with description
export const WithDescription: Story = {
  args: {
    title: "Card with Description",
    description: "This is a detailed description of the card content.",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const description = canvas.getByText("This is a detailed description of the card content.");
    await expect(description).toBeTruthy();
  },
};

// Card with image
export const WithImage: Story = {
  args: {
    title: "Card with Image",
    description: "This card includes an image.",
    image: "https://picsum.photos/400/300",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const image = canvas.getByRole("img");
    await expect(image).toBeTruthy();
    await expect(image).toHaveAttribute("src", "https://picsum.photos/400/300");
  },
};

// Featured card
export const Featured: Story = {
  args: {
    title: "Featured Card",
    description: "This is a featured card with special styling.",
    variant: "featured",
  },
};

// Card with custom content and button using fn()
export const WithCustomContent: Story = {
  render: (args) => {
    const handleClick = fn();
    return (
      <Card {...args}>
        <Button onClick={handleClick}>Click me</Button>
      </Card>
    );
  },
  args: {
    title: "Card with Button",
    description: "This card has a custom button component.",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    await expect(button).toBeTruthy();
  },
};
