import ProgressBar from '@/_components/ui/progressBar';
import { Meta, StoryObj } from '@storybook/nextjs';
import FullWidthDecorator from '../../.storybook/fullWidthDecorator';

const meta: Meta<typeof ProgressBar> = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  decorators: [FullWidthDecorator],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    progress: 50,
  },
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {
  args: { progress: 50 },
};
