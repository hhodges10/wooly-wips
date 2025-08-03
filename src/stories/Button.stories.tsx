import Button, { ButtonSize, ButtonVariant } from '@/_components/ui/button';
import { faFilter, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { Meta, StoryObj } from '@storybook/nextjs';

import { fn } from 'storybook/test';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: Object.values(ButtonVariant),
      description: 'The variant of the button',
      table: {
        type: { summary: Object.values(ButtonVariant).join(' | ') },
        defaultValue: { summary: ButtonVariant.primarySolid },
      },
    },
    size: {
      control: { type: 'select' },
      options: Object.values(ButtonSize),
      description: 'The size of the button',
      table: {
        type: { summary: Object.values(ButtonSize).join(' | ') },
        defaultValue: { summary: ButtonSize.medium },
      },
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DefaultButtons: Story = {
  render: (args) => {
    return (
      <div className="w-full">
        <div className="flex flex-col mb-6">
          <h2 className="text-xl">Small</h2>
          <div className="flex gap-4">
            <Button {...args} size={ButtonSize.small} />
            <Button
              {...args}
              size={ButtonSize.small}
              variant={ButtonVariant.secondarySolid}
            />
          </div>
        </div>
        <div className="flex flex-col mb-6">
          <h2 className="text-xl">Medium</h2>
          <div className="flex gap-4">
            <Button {...args} />
            <Button {...args} variant={ButtonVariant.secondarySolid} />
          </div>
        </div>
        <div className="flex flex-col mb-6">
          <h2 className="text-xl">Large</h2>
          <div className="flex gap-4">
            <Button {...args} size={ButtonSize.large} />
            <Button
              {...args}
              size={ButtonSize.large}
              variant={ButtonVariant.secondarySolid}
            />
          </div>
        </div>
      </div>
    );
  },
  args: {
    children: 'Button',
  },
};

export const GhostButtons: Story = {
  render: (args) => {
    return (
      <div className="w-full">
        <div className="flex flex-col mb-6">
          <h2 className="text-xl">Small</h2>
          <div className="flex gap-4">
            <Button
              {...args}
              size={ButtonSize.small}
              variant={ButtonVariant.primaryGhost}
            />
            <Button
              {...args}
              size={ButtonSize.small}
              variant={ButtonVariant.secondaryGhost}
            />
          </div>
        </div>
        <div className="flex flex-col mb-6">
          <h2 className="text-xl">Medium</h2>
          <div className="flex gap-4">
            <Button {...args} variant={ButtonVariant.primaryGhost} />
            <Button {...args} variant={ButtonVariant.secondaryGhost} />
          </div>
        </div>
        <div className="flex flex-col mb-6">
          <h2 className="text-xl">Large</h2>
          <div className="flex gap-4">
            <Button
              {...args}
              size={ButtonSize.large}
              variant={ButtonVariant.primaryGhost}
            />
            <Button
              {...args}
              size={ButtonSize.large}
              variant={ButtonVariant.secondaryGhost}
            />
          </div>
        </div>
      </div>
    );
  },
  args: {
    children: 'Button',
  },
};

export const IconButtons: Story = {
  render: (args) => {
    return (
      <>
        <div className="flex flex-col mb-6">
          <h2 className="text-xl">Solid Icon</h2>
          <Button
            variant={ButtonVariant.iconSolid}
            className="self-start"
            {...args}
          >
            <FontAwesomeIcon icon={faPlus} />
            Add Something
          </Button>
        </div>
        <div className="flex flex-col mb-6">
          <h2 className="text-xl">Outline Icon</h2>
          <Button
            variant={ButtonVariant.iconOutline}
            className="self-start"
            {...args}
          >
            <FontAwesomeIcon icon={faFilter} className="h-3.5" />
          </Button>
        </div>
      </>
    );
  },
  args: {
    children: '',
  },
};
