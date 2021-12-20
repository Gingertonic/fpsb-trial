import React from 'react';
import { Meta } from '@storybook/react';
import { Shape } from '../../src/components/Shape';

const meta: Meta = {
    title: 'Components/Shapes/Solids',
    component: Shape
}

export default meta;

export const All = () => (
    <>
    <Shape kind="angles" color="violet" />
    <Shape kind="cog" color="lime" />
    <Shape kind="star" color="coral" />
    <Shape kind="shield" color="lemon" />
    </>
)

export const Angles = () => (
    <>
    <Shape kind="angles" color="violet" />
    <Shape kind="angles" color="lime" />
    <Shape kind="angles" color="coral" />
    <Shape kind="angles" color="lemon" />
    </>
)

export const Cog = () => (
    <>
    <Shape kind="cog" color="violet" />
    <Shape kind="cog" color="lime" />
    <Shape kind="cog" color="coral" />
    <Shape kind="cog" color="lemon" />
    </>
)

export const Shield = () => (
    <>
    <Shape kind="shield" color="violet" />
    <Shape kind="shield" color="lime" />
    <Shape kind="shield" color="coral" />
    <Shape kind="shield" color="lemon" />
    </>
)

export const Star = () => (
    <>
    <Shape kind="star" color="violet" />
    <Shape kind="star" color="lime" />
    <Shape kind="star" color="coral" />
    <Shape kind="star" color="lemon" />
    </>
)

