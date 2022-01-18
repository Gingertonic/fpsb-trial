import React, { HTMLAttributes } from 'react';
import { FPColorString, colors } from '../styles/theme';
import styled from 'styled-components';

export const dirMap = {
    'ttb': 'column',
    'btt': 'column-reverse',
    'ltr': 'row',
    'rtl': 'row-reverse'
}

export interface SectionProps extends HTMLAttributes<HTMLDivElement> {
    /** Select color */
    bgColor?: FPColorString;
    /** Select direction (ttb: top to bottom etc) */
    direction?: 'ttb' | 'btt' | 'ltr' | 'rtl';
    /** Select content alignment */
    justifyContent?: 'space-around' | 'space-between' | 'start' | 'end' | 'center';
}

export const StyledSection = styled.section<SectionProps>`
    background-color: ${({ bgColor }) => bgColor ? colors[bgColor] : 'white' };
    border-top: ${({ bgColor }) => bgColor === 'white' ? "2px solid " + colors.purple : "none"};
    border-bottom: ${({ bgColor }) => bgColor === 'white' ? "2px solid " + colors.purple : "none"};
    color: ${({ bgColor }) => bgColor === 'purple' ? "white" : colors.purple};
    min-height: 100px;
    display: flex;
    flex-direction: ${({ direction }) => direction ? dirMap[direction] : 'column'};
    justify-content: ${({ justifyContent }) => justifyContent};
    padding: 30px;
    width: 100%;
    box-sizing: border-box;
    `

export const demoContent = () => (
    <>
        <p>This is a Section</p>
        <p>with two elements</p>
    </>
)

export const Section = ({ children, bgColor="white", direction="ttb", justifyContent='space-around' }: SectionProps): JSX.Element => {
    return (
        <StyledSection bgColor={bgColor} direction={direction} justifyContent={justifyContent}>
            { children || demoContent() }
        </StyledSection>
    )
};