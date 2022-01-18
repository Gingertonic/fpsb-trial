import React from "react";
import { Meta, Story } from '@storybook/react';
import { Footer } from "../components/Footer";

const meta: Meta = {
  title: "Components/Layout/Footer",
  component: Footer
};

export default meta

const Template: Story = (args) => <Footer {...args} />;

export const Default = Template.bind({});