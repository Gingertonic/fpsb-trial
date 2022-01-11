import React from 'react';
import { GlobalStyle } from '../src/styles/Global';
import { ThemeProvider } from 'styled-components';
// import { addDecorator } from "@storybook/react";
import { MemoryRouter } from "react-router";

export const decorators = [
  Story => (
      <MemoryRouter>
        <GlobalStyle />
        <Story />
      </MemoryRouter>
  ),
];


export const parameters = {
  actions: { argTypesRegex: '^on.*' },
};
