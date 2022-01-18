import React, { HTMLAttributes } from 'react';
import { FPColorString, colors } from '../styles/theme';
import styled from 'styled-components';

export interface SectionProps extends HTMLAttributes<HTMLDivElement> {
    /** Select color */
    bgColor?: FPColorString;
}

export const StyledSection = styled.section<SectionProps>`
    background-color: ${({ bgColor }) => bgColor ? colors[bgColor] : 'white' };
    border-top: ${({ bgColor }) => bgColor === 'white' ? "2px solid " + colors.purple : "none"};
    border-bottom: ${({ bgColor }) => bgColor === 'white' ? "2px solid " + colors.purple : "none"};
    color: ${({ bgColor }) => bgColor === 'purple' ? "white" : colors.purple};
    min-height: 100px;
    display: flex;
    justify-content: space-around;
    padding: 30px;
    width: 100%;
    box-sizing: border-box;
`

export const Section = ({ children, bgColor="white" }: SectionProps) => {
    return (
        <StyledSection bgColor={bgColor}>
            { children || "This is a section" }
        </StyledSection>
    )
};