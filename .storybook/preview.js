import React from 'react';
import { GlobalStyle } from '../src/styles/Global';
import { ThemeProvider } from 'styled-components';
// import {} from 'styled-components/cssprop';

export const decorators = [
  Story => (
      <>
        <GlobalStyle />
        <Story />
      </>
  ),
];


export const parameters = {
  actions: { argTypesRegex: '^on.*' },
};
