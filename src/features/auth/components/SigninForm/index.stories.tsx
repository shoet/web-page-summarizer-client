import { Meta, StoryObj } from '@storybook/react'
import { SigninForm } from '.'

export default {
  title: 'features/auth/SigninForm',
  component: SigninForm,
} as Meta<typeof SigninForm>

type Story = StoryObj<typeof SigninForm>

export const Basic: Story = {}
