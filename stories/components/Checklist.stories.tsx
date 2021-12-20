import React from "react";
import { Meta, Story } from '@storybook/react';
import { Checklist, ChecklistItem, ItemProps } from "../../src/components/Checklist";

const meta: Meta = {
  title: "Components/Lists/Checklist",
  component: ChecklistItem
};

export default meta

const Template: Story<ItemProps> = (args) => <ChecklistItem {...args} />;

export const Item = Template.bind({});
Item.args = {
  label: 'We do this'
}

export const List = () => (
  <Checklist>
    <ChecklistItem label='We do this' />
    <ChecklistItem label='We also do this' />
    <ChecklistItem label='We even do this' />
  </Checklist>
)
