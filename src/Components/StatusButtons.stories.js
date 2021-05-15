import React from 'react';

import { StatusButtons } from './StatusButtons';
  {/*
  argTypes: {
    backgroundColor: { control: 'color' },
  },
*/}
export default {
  title: 'Button/StatusButtons',
  component: StatusButtons,


}

export const Primary = () => {
  return (
  <StatusButtons variant="primary">Primary  <i class="fa fa-close"></i></StatusButtons>
  )
}
export const Secondary = () => {
  return (
  <StatusButtons variant="secondary">Secondary  <i class="fa fa-close"></i></StatusButtons>
  )
}
export const Success = () => {
  return (
  <StatusButtons variant="success">Success  <i class="fa fa-close"></i></StatusButtons>
  )
}
export const Danger = () => {
  return (
  <StatusButtons variant="danger">Danger  <i class="fa fa-close"></i></StatusButtons>
  )
}
export const Default = () => {
  return (
  <StatusButtons variant="default">Default  <i class="fa fa-close"></i></StatusButtons>
  )
}
{
/*
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
*/}