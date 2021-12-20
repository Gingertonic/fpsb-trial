import styled from 'styled-components';
import { colors, typography } from '../../styles/theme';

export interface LiItemProps {
    color: string;
}

export const StyledLi = styled.li<LiItemProps>`
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

export const StyledNumList = styled.div`
    display: flex;
    flex-direction: column;
`