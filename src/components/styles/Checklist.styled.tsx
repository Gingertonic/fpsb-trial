import styled from 'styled-components';
import { colors, typography } from '../../styles/theme';

export interface CheckItemProps {
    color: string;
}

export const StyledCheck = styled.div<CheckItemProps>`
    display: flex;
    align-items: center;
    text-align: center;
    color: ${({ color }) => colors[color]};

    h3 {
        font-family: ${typography.type.header};
        font-size: 24px;
        line-height: 32px;
        font-weight: 700;
        letter-spacing: -0.02em;
        text-transform: none;
    }

    svg, img {
        margin-right: 16px;
        stroke: ${({ color }) => colors[color]};
        stroke-width: 8;
    }

`

export const StyledList = styled.div`
    display: grid;
    grid-auto-columns: 1fr;
    grid-column-gap: 16px;
    grid-row-gap: 40px;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
`