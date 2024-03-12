import { Meta, StoryFn } from '@storybook/react'
import { Button } from '.'

export default {
  title: 'Elements/Button',
  component: Button,
  argTypes: {},
} as Meta<typeof Button>

const Template: StoryFn<typeof Button> = () => <Button />

export const Default = Template.bind({})
