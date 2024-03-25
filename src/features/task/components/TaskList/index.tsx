import { Task } from '@/types/task'
import styled from 'styled-components'
import { TaskRow } from '../TaskRow'

type TaskListProps = {
  tasks: Task[]
}

const Divider = styled.div`
  border-bottom: 1px solid #ddd;
  width: 90%;
  margin: 0 auto;
`

export const TaskList = (props: TaskListProps) => {
  const { tasks } = props

  return (
    <div>
      {tasks &&
        tasks.length > 0 &&
        tasks.map((task, idx) => {
          return (
            <div key={task.taskId}>
              <TaskRow task={task} />
              {idx != tasks.length - 1 && <Divider />}
            </div>
          )
        })}
    </div>
  )
}
