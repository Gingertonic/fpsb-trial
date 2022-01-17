import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Card, CardProps } from '../components/Card';
import { colors, FPColorString } from '../styles/theme';

const meta: Meta = {
    title: 'Components/Card',
    component: Card,
    argTypes: {
        label: { defaultValue: "Default" }
    }
}

export default meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
export const Info = Template.bind({});
export const Profile = Template.bind({});
Info.args = {
    variant: 'info',
    shadow: true,
    inverted: true,
    colorway: 'lemon',
    maxWidth: '30%',
    children: "Info Card"
};
Profile.args = {
    variant: 'info',
    shadow: true,
    inverted: true,
    colorway: 'lemon',
    maxWidth: '30%',
    children: "Profile Card"
};


// export const Colorways = () => {
//     const colorOpts = Object.keys(colors).filter(c => c !== 'white').map(c => c as FPColorString);

//     return (
//         <>
//         <div id="default">
//             <h2>Defaults</h2>
//             { colorOpts.map((c, i) => <Card key={i} colorway={c} label={`futureproof ${c}`} />) }
//         </div>

//         <div id="inverted">
//             <h2>Inverted</h2>
//             { colorOpts.map((c, i) => <Card key={i} inverted colorway={c} label={`futureproof ${c}`} />) }
//         </div>
//         </>
//     )
// };

