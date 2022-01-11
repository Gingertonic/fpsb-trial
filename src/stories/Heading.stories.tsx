import React from "react";
import { Meta, Story } from '@storybook/react';
import { Heading, Props } from "../components/Heading";

const meta: Meta = {
  title: "Components/Heading",
  component: Heading,
  argTypes: {
      content: { defaultValue: "Default Heading"},
      size: { defaultValue: "large"}
  }
};

export default meta

const Template: Story<Props> = (args) => <Heading {...args} />;

export const Default = Template.bind({});

export const Primary = () => (
  <div>
    <Heading size="huge" />
    <Heading size="xlarge" color='coral' />
    <Heading size="large" color='lemon' />
  </div>
);

export const Secondary = () => (
  <div>
    <Heading size="medium" color='purple' />
    <Heading size="small" color='lime' />
    <Heading size="tiny" color='violet' />
  </div>
);