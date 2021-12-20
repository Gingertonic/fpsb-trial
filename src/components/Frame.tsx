import React from 'react';
import { FPColorString, FPShape, colors } from '../styles/theme';
import Shield from '../assets/svgs/frames/shield.svg';
import Star from '../assets/svgs/frames/star.svg';
import Angles from '../assets/svgs/frames/angles.svg';
import Cog from '../assets/svgs/frames/cog.svg';

export interface Props {
    /** Shape */
    kind: FPShape,
    /** Select color */
    color?: FPColorString,
    /** Path to image */
}

const shapes: {[key: string]: React.FunctionComponent<React.SVGProps<SVGSVGElement>>}= { 
    "shield": Shield,
    "star": Star,
    "angles": Angles,
    "cog": Cog
};

export const Frame = ({ kind="angles" as FPShape, color='violet' as FPColorString }: Props) => {
    const key: string = Object.keys(shapes).find(sh => sh === kind) || "angles"
    const ShapeType = shapes[key]
    
    return <ShapeType fill={colors[color]} />
}
