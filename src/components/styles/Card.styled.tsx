import styled from 'styled-components';
import { colors, typography } from '../../styles/theme';

export interface StyledCardProps {
    bg: string;
    text: string;
    shadow: boolean;
    maxWidth: string;
}

export const StyledCard = styled.div<StyledCardProps>`
    background-color: ${({ bg }) => colors[bg]};
    box-shadow: ${({ shadow }) => shadow ? ("-10px 10px " + colors.purple): "none" };
    color: ${({ text }) => colors[text]};
    text-align: 'left';
    font-weight: 600;
    max-width: ${({ maxWidth }) => maxWidth};
    padding: 25px 30px;
    font-size: 0.9em;
    font-family: ${typography.type.body}
`;
