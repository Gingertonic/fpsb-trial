import React, { HTMLAttributes } from 'react';
import { FPColorString } from '../styles/theme';
import { StyledCard } from './styles/Card.styled';



export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    /** Switch bg and text color */
    inverted?: boolean;
    /** Choose contrast colour */
    colorway?: FPColorString;
    /** Choose card type */
    variant?: 'info' | 'square';
    /** Set width */
    width?: string;
    /** Add shadow */
    shadow?: boolean;
    /** Set title text - only on 'square' variant */
    title?: string;
    /** Enable hover effect */
    hoverEffect?: boolean;
    /** Click action */
    onClick?: React.MouseEventHandler | undefined;
}

export const Card = ({ children, variant='info', width='15vw', inverted=false, shadow=false, hoverEffect=false, colorway='purple', onClick, title }: CardProps): JSX.Element => {
    let isDefault: boolean = colorway === 'purple';
    let contrast: FPColorString = isDefault ? 'white' : colorway;
    let bgColor: FPColorString = inverted ? contrast : 'purple';
    let textColor: FPColorString = inverted ? 'purple' : contrast;  

    return (
        <StyledCard onClick={onClick} variant={variant} bg={bgColor} text={textColor} shadow={shadow} width={width} hover={hoverEffect}>
            { variant === 'square' && title && <div className='card-title'>{title}</div>}
            <div className={`${variant} card-content`}>
                { children || 'This is a Card' }
            </div>
        </StyledCard>
    )
};

// export const Card = ({ children }: any) => <CardContainer>{ children }</CardContainer>
