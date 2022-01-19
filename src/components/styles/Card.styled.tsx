import styled from 'styled-components';
import { colors, typography } from '../../styles/theme';

export interface StyledCardProps {
    variant: string;
    primary: string;
    contrast: string;
    accent: string;
    inverted: boolean;
    shadow: boolean;
    width: string;
    hover: boolean;
    onClick?: React.MouseEventHandler | null;
}

export const StyledCard = styled.div<StyledCardProps>`
    margin: 20px;
    background-color: ${({ primary }) => colors[primary]};
    box-shadow: ${({ shadow, contrast, primary, variant }) => {
        let col = variant === 'square' ? colors[primary] : colors[contrast];
        let val = shadow ? ("-10px 10px " + col): "none";
        return val;
    }};
    color: ${({ contrast }) => colors[contrast]};
    text-align: left;
    font-weight: 500;
    font-size: 0.9em;
    font-family: ${typography.type.body};
    width: ${({ width }) => width};
    min-width: 100px;
    padding: ${({ width, variant }) => variant !== 'info' ? (width + " 0 0 0") : '0' };
    position: relative;
    display: inline-block;
    border-style: solid;
    border-width: ${({ shadow, hover }) => shadow && hover ? "0 0 0 3px" : "0"};
    border-color: ${({ contrast }) => colors[contrast]};

    .card-content {
        padding: 10px 15px;
        top: 0;
        left: 0;
        letter-spacing: -0.02em;
    }

    .card-content.info {
        position: relative;
        font-weight: 500;
        /* top: 0;
        left: 0; */
        /* padding: 10px 15px; */
        /* transform: translate(-20%, -50%); */
    }

    .card-content.square, .card-content.image {
        position: absolute;
        font-weight: 400;
        /* top: 0;
        left: 0; */
        /* padding: 10px 15px; */
        width: 100%; 
        height: 100%;
        color: ${({inverted}) => inverted ? colors.purple : colors.white};
        /* transform: translate(-20%, -10%); */
    }

    .card-content.image {
        img {
            height: ${({ width }) => width};
            width: auto;
            transform: translate(-5px, -30px);
            border: ${({ accent }) => "10px solid " + colors[accent] };
            /* opacity: 0.8;

            &:hover {
                opacity: 1;
            } */
        }
    }

    .card-title {
        z-index: 10;
        position: absolute;
        background-color: ${({ contrast }) => colors[contrast]};
        color: ${({ inverted, primary }) => inverted ? colors.white : colors[primary]};
        width: 100%;
        padding: 10px;
        font-family: ${typography.type.display};
        font-size: 2rem;
    }

    .card-title.info {
        position: relative;
    }

    .card-title.square {
        bottom: 0;
    }

    .card-title.image {
        bottom: -10px;
        left: -10px;
    }

    &:hover {
        cursor: ${({ hover }) => hover ? 'pointer' : 'cursor'};
        border-width: ${({ hover }) => hover ? "0 0 0 4px" : "0"};
    }
`;
