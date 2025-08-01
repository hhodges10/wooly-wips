import { Meta, StoryObj } from '@storybook/nextjs';
import { UICard as Card } from './UICard';
import knitting from './assets/knitting.png';
import { TagType } from '@/_components/ui/tag';

const meta = {
  title: 'Example/Card',
  component: Card,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  args: {
    image: knitting,
    title: 'Sample Card Title',
    description: 'This is a sample description for the card.',
    tags: [],
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    image: knitting,
    title: 'Primary Card',
    description: 'This is a primary card with some sample content.',
    tags: [
      { id: '1', children: 'Tag One', type: TagType.PRIMARY },
      { id: '2', children: 'Tag Two', type: TagType.SECONDARY },
      { id: '3', children: 'Tag Three', type: TagType.DEFAULT },
    ],
  },
};
