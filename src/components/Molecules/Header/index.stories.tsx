import { Meta, StoryObj } from '@storybook/react'
import { Header } from '.'
import { AuthContext } from '@/context/AuthContext'
import type { AuthContextData } from '@/context/AuthContext'

export default {
  title: 'Molecules/Header',
  component: Header,
} as Meta<typeof Header>

type Story = StoryObj<typeof Header>

export const Login: Story = {
  decorators: [
    (Story) => {
      const authContextData: AuthContextData = {
        user: {
          username: 'John Doe',
          email: 'test@example.com',
        },
        isLoading: false,
        signIn: async () => {},
        signOut: async () => {},
        mutate: async () => undefined,
      }
      return (
        <AuthContext.Provider value={authContextData}>
          <Story />
        </AuthContext.Provider>
      )
    },
  ],
}

export const Logout: Story = {
  decorators: [
    (Story) => {
      const authContextData: AuthContextData = {
        user: undefined,
        isLoading: false,
        signIn: async () => {},
        signOut: async () => {},
        mutate: async () => undefined,
      }
      return (
        <AuthContext.Provider value={authContextData}>
          <Story />
        </AuthContext.Provider>
      )
    },
  ],
}

export const Loading: Story = {
  decorators: [
    (Story) => {
      const authContextData: AuthContextData = {
        user: undefined,
        isLoading: true,
        signIn: async () => {},
        signOut: async () => {},
        mutate: async () => undefined,
      }
      return (
        <AuthContext.Provider value={authContextData}>
          <Story />
        </AuthContext.Provider>
      )
    },
  ],
}
