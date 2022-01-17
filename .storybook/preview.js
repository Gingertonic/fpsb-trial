import React from 'react';
import { GlobalStyle } from '../src/styles/Global';
import { FontStyles } from '../src/styles/fonts';
import { MemoryRouter } from "react-router";

export const decorators = [
  Story => (
      <MemoryRouter>
        <FontStyles />
        <GlobalStyle />
        <Story />
      </MemoryRouter>
  ),
];


export const parameters = {
  actions: { argTypesRegex: '^on.*' },
};
