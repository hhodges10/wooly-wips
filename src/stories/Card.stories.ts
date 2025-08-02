import { Meta, StoryObj } from '@storybook/nextjs';
import Card from '@/_components/ui/card';
import { TagType } from '@/_components/ui/tag';
import knitting from './assets/knitting.png';

const meta = {
  title: 'Components/Card',
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
    tag: { id: '1', name: 'Tag One', type: TagType.PRIMARY },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CardWithTag: Story = {
  args: {
    image: knitting,
    title: 'Card With Tag',
    tag: { id: '1', name: 'In Progress', type: TagType.PRIMARY },
  },
};

export const CardWithoutTag: Story = {
  args: {
    image: knitting,
    title: 'Card Without Tag',
    tag: undefined,
  },
};

export const CardWithLongTitle: Story = {
  args: {
    image: knitting,
    title:
      'This is a very long card title that should be truncated with an ellipsis if it exceeds the maximum width of the card component',
    tag: { id: '2', name: 'Completed', type: TagType.SECONDARY },
  },
};

export const CardWithoutImage: Story = {
  args: {
    image: undefined,
    title: 'Card Without Image',
    tag: { id: '3', name: 'No Image', type: TagType.TERTIARY },
  },
};

export const CardWithLongTagName: Story = {
  args: {
    image: knitting,
    title: 'Card With Long Tag Name',
    tag: {
      id: '4',
      name: 'This is a very long tag name',
    },
  },
};

export const CardWithSecondaryTag: Story = {
  args: {
    image: knitting,
    title: 'Card With Secondary Tag',
    tag: { id: '6', name: 'Secondary', type: TagType.SECONDARY },
  },
};

export const CardWithTertiaryTag: Story = {
  args: {
    image: knitting,
    title: 'Card With Tertiary Tag',
    tag: { id: '7', name: 'Tertiary', type: TagType.TERTIARY },
  },
};
