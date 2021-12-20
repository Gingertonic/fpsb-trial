import React from 'react';
import { FPColorString, FPShape, colors } from '../styles/theme';
import Shield from '../assets/svgs/shapes/shield.svg';
import Star from '../assets/svgs/shapes/star.svg';
import Angles from '../assets/svgs/shapes/angles.svg';
import Cog from '../assets/svgs/shapes/cog.svg';

export interface Props {
    /** Shape */
    kind: FPShape,
    /** Select color */
    color?: FPColorString
}

const shapes: {[key: string]: React.FunctionComponent<React.SVGProps<SVGSVGElement>>}= { 
    "shield": Shield,
    "star": Star,
    "angles": Angles,
    "cog": Cog
};

export const Shape = ({ kind="angles" as FPShape, color='violet' as FPColorString }: Props) => {
    const key: string = Object.keys(shapes).find(sh => sh === kind) || "angles"
    const ShapeType = shapes[key]
    
    return (
        <ShapeType fill={colors[color]} />
    );
}
