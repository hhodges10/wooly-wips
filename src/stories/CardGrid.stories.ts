import CardGrid from '@/_components/ui/cardGrid';
import { TagType } from '@/_components/ui/tag';
import { Meta, StoryObj } from '@storybook/nextjs';

const meta = {
  title: 'Pages/CardGrid',
  component: CardGrid,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  args: {
    cardData: [
      {
        id: 'project-1',
        link: 'projects',
        title: 'Project 1',
        image: '/knitting.png',
        tag: { id: '2', type: TagType.TERTIARY, name: 'Completed' },
      },
      {
        id: 'project-2',
        link: 'projects',
        title: 'Project 2',
        image: null,
        tag: null,
      },
      {
        id: 'project-3',
        link: 'projects',
        title: 'Project 3',
        image: '/knitting.png',
        tag: { id: '1', type: TagType.PRIMARY, name: 'In Progress' },
      },
      {
        id: 'project-4',
        link: 'projects',
        title: 'Project 4',
        image: null,
        tag: null,
      },
      {
        id: 'project-5',
        link: 'projects',
        title: 'Project 5',
        image: null,
        tag: null,
      },
      {
        id: 'project-6',
        link: 'projects',
        title: 'Project 6',
        image: '/knitting.png',
        tag: null,
      },
    ],
  },
} satisfies Meta<typeof CardGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // Uses the default args defined in meta
  },
};
