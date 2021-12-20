import styled from 'styled-components';
import { colors, typography } from '../../styles/theme';

interface ItemProps {
    color: string;
}

export const StyledLi = styled.li<ItemProps>`
    display: flex;
    margin-bottom: 24px;
    flex-direction: row;
    color: ${({ color }) => colors[color]};

    .number {
        width: 56px;
        flex: 0 0 auto;
        
        span {
            font-family: ${typography.type.display};
            font-size: 48px;
            line-height: 44px;
            font-weight: 400;
            letter-spacing: 0em;
            text-transform: uppercase;
        }
    }


    .content {
        display: inline;
        margin-right: 16px;
        stroke: ${({ color }) => colors[color]};
        stroke-width: 8;
    }

`

export const StyledList = styled.div`
    display: flex;
    flex-direction: column;
`