import styled from 'styled-components';
import { colors, typography } from '../../styles/theme';

export interface StyledCardProps {
    variant: string;
    bg: string;
    text: string;
    shadow: boolean;
    width: string;
    hover: boolean;
    onClick?: React.MouseEventHandler | null;
}

export const StyledCard = styled.div<StyledCardProps>`
    margin: 20px;
    background-color: ${({ bg }) => colors[bg]};
    box-shadow: ${({ shadow, bg }) => shadow ? ("-10px 10px " + colors[bg]): "none" };
    color: ${({ text }) => colors[text]};
    text-align: left;
    font-weight: 500;
    font-size: 0.9em;
    font-family: ${typography.type.body};
    width: ${({ width }) => width};
    padding: ${({ width, variant }) => variant === 'square' ? (width + " 0 0 0") : '30px' };
    position: relative;
    display: inline-block;
    border-style: solid;
    border-width: ${({ shadow }) => shadow ? "0px 0px 2px 2px" : "0px"};
    border-color: ${({ text }) => colors[text]};

    .card-content {
        position: absolute;
        box-sizing: border-box;

        /* &:hover {
            background-color: ${({ hover, bg, text }) => hover ? colors[text] : colors[bg]};
        } */
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

    &:hover {
        cursor: ${({ hover }) => hover ? 'pointer' : 'cursor'};
        background-color: ${({ hover, bg, text }) => hover ? colors[text] : colors[bg]};

        .card-content {
            color: ${({ hover, bg, text }) => hover ? colors[bg] : colors[text]};
            position: absolute;
            box-sizing: border-box;
        }

        .card-title {
            color: ${({ hover, bg, text }) => hover ? colors[text] : colors[bg]};
            background-color: ${({ hover, bg, text }) => hover ? colors[bg] : colors[text]};
        }
    }
`;
