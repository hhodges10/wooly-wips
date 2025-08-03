import Navbar from '@/_components/ui/navbar';
import type { Meta, StoryObj } from '@storybook/nextjs';

const meta: Meta<typeof Navbar> = {
  title: 'Components/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  args: {
    // Add default props here if needed
  },
};
