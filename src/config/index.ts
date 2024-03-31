export const apiBaseUrl = import.meta.env.VITE_API_BASE_URL

export const cognitoConfig = {
  userPoolId: import.meta.env.VITE_AWS_USER_POOL_ID,
  userPoolClientId: import.meta.env.VITE_AWS_USER_POOL_CLIENT_ID,
  identityPoolId: import.meta.env.VITE_AWS_ID_POOL_ID,
  oauthDomain: import.meta.env.VITE_AWS_COGNITO_DOMAIN,
  oauthRedirectSignIn: import.meta.env.VITE_AWS_COGNITO_REDIRECT_SIGN_IN,
}

export const baseAppTitle = 'Webページ要約'
