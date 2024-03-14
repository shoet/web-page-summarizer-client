import styled from 'styled-components'
import { getSummaryList } from '../hooks/get-summary-list'
import { TaskList } from '../components/TaskList'
import { UrlInputForm } from '../components/UrlInputForm'
import { requestTask } from '../api/request-task'
import { useState } from 'react'

export const TaskListPage = () => {
  const { tasks, isLoading, error } = getSummaryList([], 5000)
  const [errors, setErrors] = useState<string[]>([])

  const TitleContainer = styled.div`
    display: flex;
    justify-content: start;
    margin-bottom: 10px;
  `

  const handleOnSubmit = async (url: string) => {
    const { error } = await requestTask(url)
    if (error) {
      setErrors([...errors, error.type])
      return
    }
  }

  return (
    <div>
      <TitleContainer>
        <h3>SummaryList</h3>
      </TitleContainer>
      <UrlInputForm onSubmit={handleOnSubmit} />
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
