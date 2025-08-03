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
  argTypes: {
    image: {
      control: { type: 'object' },
      description: 'The image to display in the card',
      table: {
        type: { summary: 'string | StaticImageData' },
        defaultValue: { summary: 'undefined' },
      },
    },
    fallbackImage: {
      control: { type: 'text' },
      description: 'The fallback image to display when no image is provided',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '/skein.png' },
      },
    },
    title: {
      control: { type: 'text' },
      description: 'The title of the card',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Sample Card Title' },
      },
    },
    tag: {
      control: { type: 'object' },
      description: 'Optional tag to display on the card',
      table: {
        type: {
          summary: '{ id: string; type?: TagType; name: string } | undefined',
        },
        defaultValue: { summary: 'undefined' },
      },
    },
  },
  args: {
    image: knitting,
    title: 'Sample Card Title',
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Cards: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-4 justify-center">
      <Card {...args} />
      <Card
        {...args}
        title="Card With Tag"
        tag={{ id: '1', name: 'Tag One', type: TagType.PRIMARY }}
      />
    </div>
  ),
  args: {
    image: knitting,
    fallbackImage: '/yarnbasket.png',
    title: 'Sample Card Title',
  },
};

export const LongTitleCard: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-4 justify-center">
      <Card
        {...args}
        title="Card With Long Title This Text Will Be Truncated"
      />
      <Card
        {...args}
        title="Card With Long Title and Tag This Text Will Be Truncated"
        tag={{ id: '2', name: 'Tag Two', type: TagType.SECONDARY }}
      />
    </div>
  ),
  args: {
    image: knitting,
    fallbackImage: '/yarnbasket.png',
  },
};

export const NoImageCard: Story = {
  render: (args) => (
    <div className="w-screen flex flex-wrap justify-center">
      <Card {...args} />
    </div>
  ),
  args: {
    image: undefined,
    title: 'Card Without Image',
    fallbackImage: '/yarnbasket.png',
  },
};
