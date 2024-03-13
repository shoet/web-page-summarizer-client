import { Task } from '@/types/task'
import styled from 'styled-components'
import { TaskRow } from '../TaskRow'

type TaskListProps = {
  tasks: Task[]
}

const Rows = styled.div`
    & > div:not(:last-child) {
      border-bottom: 1px solid #ddd;
    }
  `

export const TaskList = (props: TaskListProps) => {
  const { tasks } = props

  return (
    <Rows>
      {tasks &&
        tasks.length > 0 &&
        tasks.map((task) => {
          return <TaskRow key={task.taskId} task={task} />
        })}
    </Rows>
  )
}
