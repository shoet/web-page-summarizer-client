import styled from 'styled-components'
import { getSummaryList } from '../hooks/get-summary-list'
import { TaskList } from '../components/TaskList'
import { UrlInputForm } from '../components/UrlInputForm'

export const TaskListPage = () => {
  const { tasks, isLoading, error } = getSummaryList()

  console.log(tasks)

  const TitleContainer = styled.div`
    display: flex;
    justify-content: start;
    margin-bottom: 10px;
  `

  return (
    <div>
      <TitleContainer>
        <h3>SummaryList</h3>
      </TitleContainer>
      <UrlInputForm />
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        <TaskList tasks={tasks} />
      )}
    </div>
  )
}
