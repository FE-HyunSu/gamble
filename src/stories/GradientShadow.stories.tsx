import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import GradientShadow from '@components/GradientShadow';

export default {
  title: '@common/GradientShadow',
  component: GradientShadow,
} as ComponentMeta<typeof GradientShadow>;

const Template: ComponentStory<typeof GradientShadow> = (args) => <GradientShadow {...args} />;

export const Example = Template.bind({});

Example.args = {
  startColor: 'red',
  endColor: 'blue',
  width: 100,
  height: 20,
};
