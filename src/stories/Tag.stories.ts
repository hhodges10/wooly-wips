import { Meta, StoryObj } from '@storybook/nextjs';
import Tag, { TagType } from '@/_components/ui/tag';

const meta = {
  title: 'Components/Tag',
  component: Tag,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  args: { id: '1', type: TagType.PRIMARY, children: 'Sample Tag' },
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

export const Tertiary: Story = {
  args: {
    id: '3',
    type: TagType.TERTIARY,
    children: 'Tertiary Tag',
  },
};

export const DefaultColor: Story = {
  args: {
    id: '4',
    children: 'Default Color Tag',
  },
};
