import React from 'react';
import CheckMark from '../assets/svgs/icons/checkmark.svg';
import { StyledCheck, StyledList } from './styles/Checklist.styled';
import { FPColorString } from '../styles/theme';

export interface ChecklistItemProps {
    /** Item text */
    label?: string;
    /** Select color */
    color?: FPColorString;
}

export const ChecklistItem = ({ label, color='purple' }: ChecklistItemProps) => {
  return (
    <StyledCheck color={color}>
        <CheckMark />
        {label && <h3>{label}</h3> }
    </StyledCheck>
  );

}

export const Checklist = ({ children }: any) => <StyledList>{children}</StyledList>
