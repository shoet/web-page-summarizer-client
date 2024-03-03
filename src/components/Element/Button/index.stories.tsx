import { Meta, StoryFn } from '@storybook/react'
import { Button } from '.'

export default {
  title: 'Elements/Button',
  component: Button,
  argTypes: {},
} as Meta<typeof Button>

const params = {}

const Template: StoryFn<typeof Button> = (args) => <Button />

export const Default = Template.bind({})
