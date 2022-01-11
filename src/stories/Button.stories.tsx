import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, BtnProps } from '../components/Button';
import { colors, FPColorString } from '../styles/theme';

const meta: Meta = {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        label: { defaultValue: "Default" }
    }
}

export default meta;

const Template: Story<BtnProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
export const Inverted = Template.bind({});
Inverted.args = {
    inverted: true,
    label: 'Inverted'
};


export const Colorways = () => {
    const btnColors = Object.keys(colors).filter(c => c !== 'white').map(c => c as FPColorString);

    return (
        <>
        <div id="default">
            <h2>Defaults</h2>
            { btnColors.map((c, i) => <Button key={i} colorway={c} label={`futureproof ${c}`} />) }
        </div>

        <div id="inverted">
            <h2>Inverted</h2>
            { btnColors.map((c, i) => <Button key={i} inverted colorway={c} label={`futureproof ${c}`} />) }
        </div>
        </>
    )
};

