import styled from 'styled-components'
import { TaskRow } from '../components/TaskRow'
import { getSummaryList } from '../hooks/get-summary-list'

export const TaskListPage = () => {
  const { tasks, isLoading, error } = getSummaryList()

  console.log(tasks)

  const TitleContainer = styled.div`
    display: flex;
    justify-content: start;
    margin-bottom: 10px;
  `

  const Rows = styled.div`
    & > div:not(:last-child) {
      border-bottom: 1px solid #ddd;
    }
  `

  return (
    <div>
      <TitleContainer>
        <h3>SummaryList</h3>
      </TitleContainer>
      {isLoading ? (
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
      )}
    </div>
  )
}
