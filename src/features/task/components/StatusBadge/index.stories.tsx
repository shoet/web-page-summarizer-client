import { Meta, Story } from '@storybook/react'
import { StatusBadge } from '.'

export default {
  title: 'features/task/StatusBadge',
  component: StatusBadge,
  args: {
    status: 'request',
  },
} as Meta<typeof StatusBadge>

const Template: Story<typeof StatusBadge> = (args) => <StatusBadge {...args} />

export const Request = Template.bind({})
Request.args = { status: 'request' }

export const Processing = Template.bind({})
Processing.args = { status: 'processing' }

export const Complete = Template.bind({})
Complete.args = { status: 'complete' }

export const Failed = Template.bind({})
Failed.args = { status: 'failed' }
