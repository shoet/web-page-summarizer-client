import React from 'react'
import type { Preview } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../src/theme'
import { BrowserRouter } from 'react-router-dom'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Story />
          </BrowserRouter>
        </ThemeProvider>
      </>
    ),
  ],
}

export default preview
