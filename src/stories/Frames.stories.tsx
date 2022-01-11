import React from 'react';
import { Meta } from '@storybook/react';
import { Frame } from '../components/Frame';

const meta: Meta = {
    title: 'Components/Shapes/Frames',
    component: Frame
}

export default meta;

export const All = () => (
    <>
    <Frame kind="angles" color="violet" />
    <Frame kind="cog" color="lime" />
    <Frame kind="star" color="coral" />
    <Frame kind="shield" color="lemon" />
    </>
)