import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme/index.ts'
import { GlobalStyle } from './components/Layout/GlobalStayle/index.tsx'
import { AuthContextProvider } from './context/AuthContext/index.tsx'
import { Routes } from './router.tsx'
import { Amplify } from 'aws-amplify'
import '@aws-amplify/ui-react/styles.css'
import { Authenticator } from '@aws-amplify/ui-react'
import { cognitoConfig } from '@/config'

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: cognitoConfig.userPoolId,
      userPoolClientId: cognitoConfig.userPoolClientId,
      identityPoolId: cognitoConfig.identityPoolId,
      userAttributes: {
        name: {
          required: true,
        },
      },
      loginWith: {
        oauth: {
          domain: cognitoConfig.oauthDomain,
          scopes: ['email', 'profile', 'openid'],
          redirectSignIn: [
            cognitoConfig.oauthRedirectSignIn,
            'http://localhost:5173/',
          ],
          redirectSignOut: ['http://google.com/'],
          providers: ['Google'],
          responseType: 'code',
        },
      },
    },
  },
})

const formFields = {
  signUp: {
    username: {
      label: 'Email',
      placeholder: 'Enter your Email',
      isRequired: true,
      order: 1,
    },
    name: {
      label: 'Name',
      placeholder: 'Enter your Username',
      isRequired: true,
      order: 2,
    },
    password: {
      label: 'Password',
      placeholder: 'Enter your Password',
      isRequired: true,
      order: 3,
    },
    confirm_password: {
      label: 'Confirm Password',
      order: 4,
    },
  },
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Authenticator formFields={formFields} socialProviders={['google']}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <AuthContextProvider>
          <Routes />
        </AuthContextProvider>
      </ThemeProvider>
    </Authenticator>
  </React.StrictMode>
)
