import React from 'react';
import styled from 'styled-components';
import { colors, typography } from '../../styles/theme';
import RightArrow from '../../assets/svgs/icons/right-arrow.svg';

interface BtnProps {
    bg: string;
    text: string;
}

export const StyledButton = styled.button<BtnProps>`
    display: flex;
    border: none;
    margin: 4px;
    color: ${({ text}) => colors[text]};
    background-color: ${({ bg}) => colors[bg]};

    .btn {
        height: 48px;
        padding-right: 16px;
        padding-left: 16px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        text-decoration: none;
        
        .label {
            font-weight: ${typography.weight.extrabold};
            font-size: 16px;
            line-height: 24px;
        }
    }

`

interface ArrProps {
    color: string
}

const ArrowWrapper = styled.div`
    margin-left: 8px;
    transform: translate3d(0px, 2px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transform-style: preserve-3d;
    transition: all .3s;

    ${StyledButton}:hover & {
        transform: translate3d(4px, 2px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    }
`
export const BtnArrow = ({ color }: ArrProps) => (
    <ArrowWrapper>
        <RightArrow fill={colors[color]}/>
    </ArrowWrapper>
)