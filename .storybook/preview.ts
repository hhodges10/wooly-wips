import type { Preview } from '@storybook/nextjs';
import '../src/app/globals.css'; // replace with the name of your tailwind css file

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      options: {
        wool: { name: 'Wool', value: '#f9f6f0' },
      },
    },
    a11y: {
      context: 'body',
      config: {},
      options: {},
    },
  },
  initialGlobals: {
    // 👇 Set the initial background color
    backgrounds: { value: 'Wool' },
  },
};

export default preview;
