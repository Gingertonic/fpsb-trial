import React from 'react';
import { StyledLi, StyledList } from './styles/NumberedList.styled';
import { FPColorString } from '../styles/theme';

export interface NumItemProps {
    /** Item text */
    content: string;
    bullet: number | string;
    /** Select color */
    color?: FPColorString;
}

export interface NumListProps {
    /** List items */
    items: string[];
    /** Select color */
    color?: FPColorString;
}

export const NumberedItem = ({ content, bullet, color='purple' }: NumItemProps) => {
  return (
    <StyledLi color={color}>
        <div className='number'><span>{bullet}.</span></div>
        <div className='content'>{content}</div>
    </StyledLi>
  );

}

export const NumberedList = ({ items, color='purple' }: NumListProps) => {
    const renderLis = items.map((text, idx) => <NumberedItem bullet={idx + 1} content={text} color={color} /> )

    return <StyledList>{renderLis}</StyledList>
}
