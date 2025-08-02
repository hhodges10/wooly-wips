import type { Preview } from '@storybook/nextjs';
import '../src/app/globals.css'; // replace with the name of your tailwind css file
import { Lexend, Zilla_Slab } from 'next/font/google';

const lexend = Lexend({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-lexend',
  display: 'swap',
});

const zillaSlab = Zilla_Slab({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-zilla-slab',
  display: 'swap',
});

const preview: Preview = {
  decorators: [
    (Story) => (
      <div className={`${lexend.variable} ${zillaSlab.variable}`}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      options: {
        bg: { name: 'Background', value: '#fdfdff' },
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
    backgrounds: { value: 'Background' },
  },
};

export default preview;
