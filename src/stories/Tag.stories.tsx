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
  argTypes: {
    type: {
      control: { type: 'select' },
      options: Object.values(TagType),
      description: 'The type of the tag',
      table: {
        type: { summary: Object.values(TagType).join(' | ') },
        defaultValue: { summary: TagType.PRIMARY },
      },
    },
    children: {
      control: { type: 'text' },
      description: 'The content of the tag',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
  },
  args: { id: '1', type: TagType.PRIMARY, children: 'Sample Tag' },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Tags: Story = {
  render: (args) => (
    <div className="flex gap-2">
      <Tag {...args} id="1" type={TagType.PRIMARY}>
        {args.children}
      </Tag>
      <Tag {...args} id="2" type={TagType.SECONDARY}>
        Secondary Tag
      </Tag>
      <Tag {...args} id="3" type={TagType.TERTIARY}>
        Tertiary Tag
      </Tag>
      <Tag {...args} id="4">
        Default Color Tag
      </Tag>
    </div>
  ),
};
