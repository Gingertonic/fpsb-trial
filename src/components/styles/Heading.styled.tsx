import styled, { css } from 'styled-components';
import { colors, typography } from '../../styles/theme';

interface Props {
    el: string;
    color?: string;
}

export const StyledHeading = styled.h1<Props>`
  color: ${({ color }) => color ? colors[color] : colors.purple };
  margin-top: 0px;
  font-size: 100px;
  line-height: 88px;
  font-weight: ${typography.weight.bold};

  ${({ el}) => el === "h1" && css`
    font-size: ${typography.size.huge}px;
    line-height: ${typography.line.huge}px;
    margin-bottom: ${typography.margin.huge}px;
    font-weight: ${typography.weight.regular};
    text-transform: uppercase;
    letter-spacing: 0em;
    font-family: 'Fkscreamerlegacy upright', sans-serif;
  `}
  ${props => props.el === "h2" && css`
    font-size: ${typography.size.xlarge}px;
    line-height: ${typography.line.xlarge}px;
    margin-bottom: ${typography.margin.xlarge}px;
    font-weight: ${typography.weight.regular};
    text-transform: uppercase;
    letter-spacing: 0em;
    font-family: 'Fkscreamerlegacy upright', sans-serif;
  `}
  ${props => props.el === "h3" && css`
  font-size: ${typography.size.large}px;
  line-height: ${typography.line.large}px;
  margin-bottom: ${typography.margin.large}px;
  font-weight: ${typography.weight.regular};
  text-transform: uppercase;
  letter-spacing: 0em;
  font-family: 'Fkscreamerlegacy upright', sans-serif;
  `}
  ${props => props.el === "h4" && css`
    font-size: ${typography.size.medium}px;
    line-height: ${typography.line.medium}px;
    margin-bottom: ${typography.margin.medium}px;
    font-weight: ${typography.weight.regular};
  `}
  ${props => props.el === "h5" && css`
    font-size: ${typography.size.small}px;
    line-height: ${typography.line.small}px;
    margin-bottom: ${typography.margin.small}px;
    font-weight: ${typography.weight.regular};
  `}
  ${props => props.el === "h6" && css`
  font-size: ${typography.size.tiny}px;
  line-height: ${typography.line.tiny}px;
  margin-bottom: ${typography.margin.tiny}px;
  font-weight: ${typography.weight.regular};
  `}
`