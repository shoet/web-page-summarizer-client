import { Meta, Story } from '@storybook/react'
import { Badge } from '.'
import { theme } from '@/theme'

export default {
  title: 'Elements/Badge',
  component: Badge,
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
    fontSize: { control: 'text' },
  },
} as Meta<typeof Badge>

const Template: Story<typeof Badge> = (args) => <Badge {...args}>Badge</Badge>

export const Request = Template.bind({})
Request.args = {
  backgroundColor: theme.statusColor.request.backgroundColor,
  color: theme.statusColor.request.color,
}

export const Progress = Template.bind({})
Progress.args = {
  backgroundColor: theme.statusColor.progress.backgroundColor,
  color: theme.statusColor.progress.color,
}

export const Complete = Template.bind({})
Complete.args = {
  backgroundColor: theme.statusColor.complete.backgroundColor,
  color: theme.statusColor.complete.color,
}

export const Failed = Template.bind({})
Failed.args = {
  backgroundColor: theme.statusColor.failed.backgroundColor,
  color: theme.statusColor.failed.color,
}
