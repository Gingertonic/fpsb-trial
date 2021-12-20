import React from 'react';
import { StyledLi, StyledList } from './styles/NumberedList.styled';
import { FPColorString } from '../styles/theme';

export interface ItemProps {
    /** Item text */
    content: string,
    bullet: number | string,
    /** Select color */
    color?: FPColorString,
}

export interface ListProps {
    /** List items */
    items: string[]
    /** Select color */
    color?: FPColorString,
}

export const NumberedItem = ({ content, bullet, color='purple' as FPColorString }: ItemProps) => {
  return (
    <StyledLi color={color}>
        <div className='number'><span>{bullet}.</span></div>
        <div className='content'>{content}</div>
    </StyledLi>
  );

}

export const NumberedList = ({ items, color='purple' as FPColorString  }: ListProps) => {
    const renderLis = items.map((text, idx) => <NumberedItem bullet={idx + 1} content={text} color={color} /> )

    return <StyledList>{renderLis}</StyledList>
}
