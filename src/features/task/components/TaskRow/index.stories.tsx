import { Meta, Story } from '@storybook/react'
import { TaskRow } from '.'

export default {
  title: 'features/task/TaskRow',
  component: TaskRow,
  args: {
    task: {
      taskId: 'b35b6565-9840-49f1-b955-1a9c151296a1',
      taskStatus: 'processing',
      pageUrl: 'https://www.google.com',
      title: 'Google',
      createdAt: 1,
    },
  },
} as Meta<typeof TaskRow>

const Template: Story<typeof TaskRow> = (args) => <TaskRow {...args} />

export const Default = Template.bind({})
