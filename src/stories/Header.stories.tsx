import React from "react";
import { Meta, Story } from '@storybook/react';
import { Header, HeaderProps } from "../components/Header";
import { DEMO_AVATAR } from "../consts";

const meta: Meta = {
  title: "Components/Layout/Header",
  component: Header
};

export default meta

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const Default = Template.bind({});
export const Inverted = Template.bind({});
export const Custom = Template.bind({});
export const ImageError = Template.bind({})

Custom.args = {
    imgUrl: DEMO_AVATAR,
    altText: 'My custom alt text'
};

Inverted.args = {
    inverted: true
}

ImageError.args = {
    imgUrl: 'notanimg.png',
    altText: 'This should error and change to default image and text!'
};
