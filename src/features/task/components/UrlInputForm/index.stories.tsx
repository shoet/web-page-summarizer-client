import { Meta, StoryObj } from '@storybook/react'
import { UrlInputForm } from '.'

export default {
  title: 'features/task/UrlInputForm',
  component: UrlInputForm,
  argTypes: {},
} as Meta<typeof UrlInputForm>

type Story = StoryObj<typeof UrlInputForm>

export const Basic: Story = {}
