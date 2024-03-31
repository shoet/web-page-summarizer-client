import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme/index.ts'
import { GlobalStyle } from './components/Layout/GlobalStayle/index.tsx'
import { Routes } from './router.tsx'
import { Amplify } from 'aws-amplify'
import '@aws-amplify/ui-react/styles.css'
import { Authenticator } from '@aws-amplify/ui-react'
import { cognitoConfig, baseAppTitle } from '@/config'
import { SessionContextProvider } from './context/SessionContext/index.tsx'
import { I18n } from 'aws-amplify/utils'
import { translations } from '@aws-amplify/ui-react'
import { MainLayout } from './components/Layout/MainLayout'
I18n.putVocabularies(translations)
I18n.setLanguage('ja')

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

document.title = baseAppTitle

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <SessionContextProvider>
        <MainLayout>
          <Authenticator formFields={formFields} socialProviders={['google']}>
            <Routes />
          </Authenticator>
        </MainLayout>
      </SessionContextProvider>
    </ThemeProvider>
  </React.StrictMode>
)
