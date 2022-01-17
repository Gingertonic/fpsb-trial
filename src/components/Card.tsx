import React, { HTMLAttributes } from 'react';
import { FPColorString } from '../styles/theme';
import { StyledCard } from './styles/Card.styled';



export interface CardProps extends HTMLAttributes<HTMLButtonElement> {
    /** Switch bg and text color */
    inverted?: boolean;
    /** Choose contrast colour */
    colorway?: FPColorString;
    /** Choose card type */
    variant?: 'info' | 'profile';
    /** Set maxWidth */
    maxWidth?: string;
    /** Set if card has shadow */
    shadow?: boolean;
}

export const Card = ({ children, variant='info', maxWidth='fit-content', inverted=false, shadow=false, colorway='purple' }: CardProps): JSX.Element => {
    let isDefault = colorway === 'purple';
    let contrast = isDefault ? 'white' : colorway;
    let bgColor = inverted ? contrast : 'purple';
    let textColor = inverted ? 'purple' : contrast;    

    return (
        <StyledCard className={variant} bg={bgColor} text={textColor} shadow={shadow} maxWidth={maxWidth}>
            { children || 'This is a Card' }
        </StyledCard>
    )
};

// export const Card = ({ children }: any) => <CardContainer>{ children }</CardContainer>
