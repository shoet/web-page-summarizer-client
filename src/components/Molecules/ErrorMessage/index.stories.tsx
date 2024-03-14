import { Meta, StoryObj } from '@storybook/react'
import { ErrorMessage } from '.'

export default {
  title: 'Molecules/ErrorMessage',
  component: ErrorMessage,
  argTypes: {
    message: { control: 'text' },
  },
} as Meta<typeof ErrorMessage>

type Story = StoryObj<typeof ErrorMessage>

export const Defualt: Story = {
  args: {
    message: 'Error: Internal Server Error',
  },
}
