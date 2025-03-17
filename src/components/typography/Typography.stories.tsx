import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";
import Typography from "./Typography";

const meta = {
  title: "Design System/Typography",
  component: Typography,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Heading1: Story = {
  args: {
    variant: "h1",
    children: "Heading 1 (32px - 40px)",
  },
  play: async ({ canvasElement }) => {
    // Verify text content
    const canvas = within(canvasElement);
    const heading = canvas.getByText("Heading 1 (32px - 40px)");
    await expect(heading.tagName.toLowerCase()).toBe("h1");
  },
};

export const Heading2: Story = {
  args: {
    variant: "h2",
    children: "Heading 2 (24px)",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const heading = canvas.getByText("Heading 2 (24px)");
    await expect(heading.tagName.toLowerCase()).toBe("h2");
  },
};

export const Heading3: Story = {
  args: {
    variant: "h3",
    children: "Heading 3 (18px)",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const heading = canvas.getByText("Heading 3 (18px)");
    await expect(heading.tagName.toLowerCase()).toBe("h3");
  },
};

export const Heading4: Story = {
  args: {
    variant: "h4",
    children: "Heading 4 (15px)",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const heading = canvas.getByText("Heading 4 (15px)");
    await expect(heading.tagName.toLowerCase()).toBe("h4");
  },
};

export const Paragraph: Story = {
  args: {
    variant: "p",
    children: "Paragraph (12px) - Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nun.",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const paragraph = canvas.getByText(/^Paragraph \(12px\)/);
    await expect(paragraph.tagName.toLowerCase()).toBe("p");
  },
};

// Create a separate type for the showcase story that doesn't require args
type ShowcaseStory = Omit<StoryObj<typeof meta>, "args"> & {
  args?: never;
};

export const TypographyShowcase: ShowcaseStory = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        fontFamily: "var(--font-dm-sans)",
      }}
    >
      <div>
        <Typography variant="h1">Heading 1 (--font-xl: 32px - 40px)</Typography>
        <Typography
          variant="p"
          style={{ marginTop: "5px", color: "#666" }}
        >
          Font weight: 700 | Line height: Variable based on font size
        </Typography>
      </div>
      <div>
        <Typography variant="h2">Heading 2 (--font-lg: 24px)</Typography>
        <Typography
          variant="p"
          style={{ marginTop: "5px", color: "#666" }}
        >
          Font weight: 700 | Line height: 25px
        </Typography>
      </div>
      <div>
        <Typography variant="h3">Heading 3 (--font-md: 18px)</Typography>
        <Typography
          variant="p"
          style={{ marginTop: "5px", color: "#666" }}
        >
          Font weight: 700 | Line height: 25px
        </Typography>
      </div>
      <div>
        <Typography variant="h4">Heading 4 (--font-sm: 15px)</Typography>
        <Typography
          variant="p"
          style={{ marginTop: "5px", color: "#666" }}
        >
          Font weight: 700 | Line height: 16px
        </Typography>
      </div>
      <div>
        <Typography variant="p">Paragraph (--font-xs: 12px) - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
        <Typography
          variant="p"
          style={{ marginTop: "5px", color: "#666" }}
        >
          Font weight: 400 | Line height: 25px
        </Typography>
      </div>
      <div style={{ marginTop: "20px" }}>
        <Typography variant="h3">Font Family</Typography>
        <Typography
          variant="p"
          style={{ marginTop: "10px" }}
        >
          DM Sans (var(--font-dm-sans))
        </Typography>
      </div>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const headings = canvas.getAllByText(/^Heading \d/);
    await expect(headings.length).toBeGreaterThan(0);
  },
};
