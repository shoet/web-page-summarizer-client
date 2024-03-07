import styled from 'styled-components'
import { TaskRow } from '../components/TaskRow'
import { getSummaryList } from '../hooks/get-summary-list'

export const TaskListPage = () => {
  const { tasks, isLoading, error } = getSummaryList()

  console.log(tasks)

  const Rows = styled.div`
    & > div:not(:last-child) {
      border-bottom: 1px solid #ddd;
    }
  `

  return isLoading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>Error: {error.message}</div>
  ) : (
    <Rows>
      {tasks &&
        tasks.length > 0 &&
        tasks.map((task) => {
          return <TaskRow key={task.id} task={task} />
        })}
    </Rows>
  )
}
