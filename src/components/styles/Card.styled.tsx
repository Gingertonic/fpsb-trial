import styled from 'styled-components';
import { colors, typography } from '../../styles/theme';

export interface StyledCardProps {
    variant: string;
    bg: string;
    text: string;
    shadow: boolean;
    width: string;
}

export const StyledCard = styled.div<StyledCardProps>`
    margin: 20px;
    background-color: ${({ bg }) => colors[bg]};
    box-shadow: ${({ shadow, text }) => shadow ? ("-10px 10px " + colors[text]): "none" };
    color: ${({ text }) => colors[text]};
    text-align: left;
    font-weight: 500;
    font-size: 0.9em;
    font-family: ${typography.type.body};
    width: ${({ width }) => width};
    padding: ${({ width, variant }) => variant === 'square' ? (width + " 0 0 0") : '30px' };
    position: relative;
    display: inline-block;

    .card-content {
        position: absolute;
        box-sizing: border-box;
    }

    .card-content.info {
        font-weight: 500;
        top: 50%;
        left: 20%;
        transform: translate(-20%, -50%);
    }

    .card-content.square {
        font-weight: 400;
        top: 0;
        left: 0;
        padding: 10px 15px;
        width: 100%; 
        height: 100%;
        box-sizing: border-box;
        /* transform: translate(-20%, -10%); */
    }

    .card-title {
        position: absolute;
        bottom: 0;
        /* opacity: 0.4; */
        background-color: ${({ text }) => colors[text]};
        color: ${({ bg }) => colors[bg]};
        width: 100%;
        padding: 10px;
        box-sizing: border-box;
        font-family: ${typography.type.display};
        font-size: 2rem;
    }
`;
