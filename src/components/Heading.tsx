import React from 'react';
import { StyledHeading } from './styles/Heading.styled';
import { sizes, FPColorString, FPSize } from '../styles/theme';

export interface Props {
    /** Heading text */
    content?: string;
    /** Select color */
    color?: FPColorString;
    /** Semantic size */
    size?: FPSize;
    /** h* element (alternative to `size` prop) */
    as?: string;
}

export const Heading = ({ content, as, size='medium', color='purple' }: Props) => {
  let sizeIsEl = as || size.match(/h\d$/i)
  let el = sizeIsEl ? size : sizes[size]

  return (
    <StyledHeading el={el} as={el} color={color}>
      {content || `This is a ${size} heading`}
    </StyledHeading>
  );
}
