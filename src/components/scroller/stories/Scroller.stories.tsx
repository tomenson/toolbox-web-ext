import React from 'react';
import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';

import { Scroller } from '../component';

export default {
  title: 'Components/Scroller',
  component: Scroller,
  args: {
    onClickScrollBottom: action('click-scroll-bottom'),
    onClickScrollTop: action('click-scroll-top'),
  },
} as ComponentMeta<typeof Scroller>;

const Template: ComponentStory<typeof Scroller> = (args) => (
  <Scroller {...args} />
);

export const Render = Template.bind({});

export const ScrollTop = Template.bind({});

ScrollTop.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByTestId('scroll-to-top'));
};

export const ScrollBottom = Template.bind({});

ScrollBottom.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByTestId('scroll-to-bottom'));
};
