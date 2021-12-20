import React, { HTMLAttributes } from 'react';
import { FPColorString } from '../styles/theme';
import { StyledButton, BtnArrow } from './styles/Button.styled';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
    /** required */
    label: string;
    /** Denotes external link when 'true' */
    external?: boolean;
    /** Link href */
    href?: string;
    /** Switch bg and text color */
    inverted?: boolean;
    /** Choose contrast colour */
    colorway?: FPColorString;
    /** Click action */
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({ label, href, external, className, inverted=false, colorway='purple' as FPColorString, ...props }: Props): JSX.Element => {
    let isDefault = colorway === 'purple';
    let contrast = isDefault ? 'white' : colorway;
    let bgColor: string = inverted ? contrast : 'purple';
    let textColor: string = inverted ? 'purple' : contrast;    

    return (
        <StyledButton bg={bgColor} text={textColor} {...props}>
            <a className='btn' href={href}>
                <div className='label'>{label}</div>
                <BtnArrow color={textColor}/>
            </a>
        </StyledButton>
    )
};