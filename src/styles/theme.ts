import { css } from 'styled-components';

type Settings = {[key: string]: any};

export const colors: Settings = {
  // Palette
  purple: '#3C2157',
  white: '#FFFFFF',

  violet: '#B6A2FF',
  lime: '#D0E54D',
  lemon: '#FFBB36',
  coral: '#FF7999'
};

export type FPColorString = 'purple' | 'coral' | 'lime' | 'lemon' | 'violet';


export const spacing: Settings = {
  padding: {
    small: 10,
    medium: 20,
    large: 30
  },
  borderRadius: {
    small: 5,
    default: 10
  },
};

export const typography: Settings = {
  type: {
    display: '"FK Screamer", sans-serif',
    header: '"Work Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
    body: '"Work Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
    code: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
  },
  weight: {
    regular: '400',
    bold: '500',
    extrabold: '700'
  },
  size: {
    huge: '100',
    xlarge: '72',
    large: '48',
    medium: '24',
    small: '19',
    tiny: '16',
  },
  line: {
    huge: '88',
    xlarge: '64',
    large: '44',
    medium: '32',
    small: '28',
    tiny: '24',
  },
  margin: {
    huge: '24',
    xlarge: '20',
    large: '16',
    medium: '16',
    small: '12',
    tiny: '8',
  }
};

export const breakpoint: number = 600;
export const pageMargin: number = 5.55555;

export const pageMargins = css`
  padding: 0 ${spacing.padding.medium}px;
  @media (min-width: ${breakpoint * 1}px) {
    margin: 0 ${pageMargin * 1}%;
  }
  @media (min-width: ${breakpoint * 2}px) {
    margin: 0 ${pageMargin * 2}%;
  }
  @media (min-width: ${breakpoint * 3}px) {
    margin: 0 ${pageMargin * 3}%;
  }
  @media (min-width: ${breakpoint * 4}px) {
    margin: 0 ${pageMargin * 4}%;
  }
`;
