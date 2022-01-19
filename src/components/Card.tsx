import React, { HTMLAttributes } from 'react';
import { FPColorString } from '../styles/theme';
import { StyledCard } from './styles/Card.styled';



export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    /** Switch bg and text color */
    inverted?: boolean;
    /** Choose contrast colour */
    colorway?: FPColorString;
    /** Choose accent colour */
    accent?: FPColorString;
    /** Choose card type */
    variant?: 'info' | 'square' | 'image';
    /** Set width */
    width?: string;
    /** Add shadow */
    shadow?: boolean;
    /** Set title text - only on 'square' variant */
    title?: string;
    /** Add image (pass url) - only on 'image' variant*/
    image?: string;
    /** Enable hover effect */
    hoverEffect?: boolean;
    /** Click action */
    onClick?: React.MouseEventHandler | undefined;
}

export const Card = ({ children, variant='info', inverted=false, shadow=false, hoverEffect=false, colorway='violet', accent='coral', onClick, title, width, image }: CardProps): JSX.Element => {
    let primary: FPColorString = inverted ? colorway : 'purple';
    let contrast: FPColorString = inverted ? 'purple' : colorway;
    if(!width){
        width = variant === 'info' ? 'auto' : '200px';
    }

    return (
        <StyledCard onClick={onClick} variant={variant} primary={primary} inverted={inverted} accent={accent} contrast={contrast} shadow={shadow} width={width} hover={hoverEffect}>
            { title && <div className={`${variant} card-title`}>{title}</div>}
            <div className={`${variant} card-content`}>
                { variant === 'image' ? 
                    <img src={image} alt={title || 'A futureproof image'} />
                    : (children || "This is a card") }
            </div>
        </StyledCard>
    )
};

// export const Card = ({ children }: any) => <CardContainer>{ children }</CardContainer>
