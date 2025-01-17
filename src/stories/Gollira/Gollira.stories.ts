import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Gollira } from './Gollira';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Gollira',
  component: Gollira,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Gollira>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Gollira',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Gollira',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Gollira',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Gollira',
  },
};

export const Nord: Story = {
  args: {
    primary: false,
    label: "Gollira"
  }
};
