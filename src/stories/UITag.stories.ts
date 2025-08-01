import { Meta, StoryObj } from '@storybook/nextjs';
import { UITag as Tag } from './UITag';
import { TagType } from '@/_components/ui/tag';

const meta = {
  title: 'Example/Tag',
  component: Tag,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  args: { id: '1', type: TagType.DEFAULT, children: 'Sample Tag' },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    id: '1',
    type: TagType.PRIMARY,
    children: 'Sample Tag',
  },
};

export const Secondary: Story = {
  args: {
    id: '2',
    type: TagType.SECONDARY,
    children: 'Another Tag',
  },
};

export const DefaultColor: Story = {
  args: {
    id: '3',
    children: 'Default Color Tag',
  },
};
