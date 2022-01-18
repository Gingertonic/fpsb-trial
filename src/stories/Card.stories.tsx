import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Card, CardProps } from '../components/Card';
import { colors, FPColorString } from '../styles/theme';

const meta: Meta = {
    title: 'Components/Card',
    component: Card
}

export default meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
export const Info = Template.bind({});
export const Inverted = Template.bind({});
export const Square = Template.bind({});
Info.args = {
    variant: 'info',
    colorway: 'lemon',
    width: '25%',
    children: "Info Card",
};

Inverted.args = {
    variant: 'info',
    colorway: 'lemon',
    inverted: true,
    width: '20vw',
    children: "Inverted Card",
};

Square.args = {
    variant: 'square',
    title: 'Lytical',
    colorway: 'lemon',
    width: '200px',
    children: "Graduating in 3 months on April 8th 2022",
    hoverEffect: true,
    onClick: () => alert('hai')
};


export const Variations = () => {
    const colorOpts = Object.keys(colors).filter(c => c !== 'white' && c!=='purple').map(c => c as FPColorString);

    return (
        <>
        <div id="default">
            <h2>Defaults</h2>
            { colorOpts.map((c, i) => <Card key={i} variant="info" colorway={c} />) }
        </div>

        <div id="inverted">
            <h2>Inverted</h2>
            { colorOpts.map((c, i) => <Card key={i} variant="info" inverted colorway={c} />) }
        </div>

        <div id="shadows">
            <h2>With Shadow</h2>
            { colorOpts.map((c, i) => <Card key={i} variant="info" shadow colorway={c} />) }
        </div>

        <div id="shadows-inverted">
            <h2>Inverted with Shadow</h2>
            { colorOpts.map((c, i) => <Card key={i} variant="info" inverted shadow colorway={c} />) }
        </div>

        <div id="squares">
            <h2>Square & opt. Hover Effect</h2>
            { colorOpts.map((c, i) => <Card key={i} title="Card Title" variant="square" hoverEffect colorway={c} />) }
        </div>

        <div id="squares-shadows">
            <h2>Squares with Shadows & opt. Hover Effect</h2>
            { colorOpts.map((c, i) => <Card key={i} title="Card Title" variant="square" shadow hoverEffect colorway={c} />) }
        </div>
        
        <div id="squares-shadows-inverted">
            <h2>Inverted Squares with Shadows & opt. Hover Effect</h2>
            { colorOpts.map((c, i) => <Card key={i} title="Card Title" variant="square" shadow hoverEffect inverted colorway={c} />) }
        </div>
        </>
    )
};

