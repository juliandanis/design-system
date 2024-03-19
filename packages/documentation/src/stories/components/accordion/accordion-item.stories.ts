import type { Meta, StoryObj } from '@storybook/web-components';

const meta: Meta = {
  id: '3b86bc9b-3dcd-4788-a436-88fd18a6312d',
  title: 'Components/Accordion Item',
  component: 'post-accordion-item',
  argTypes: {
    collapsed: {
      control: false,
    },
    headingLevel: {
      control: false,
    },
  },
};

export default meta;

// STORIES
type Story = StoryObj;

export const Default: Story = {
  parameters: {
    controls: {
      exclude: ['accordion-item'],
    },
  },
};
