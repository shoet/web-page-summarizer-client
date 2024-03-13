import styled from 'styled-components'
import { getSummaryList } from '../hooks/get-summary-list'
import { TaskList } from '../components/TaskList'
import { UrlInputForm } from '../components/UrlInputForm'
import { requestTask } from '../api/request-task'
import { useState } from 'react'

export const TaskListPage = () => {
  const { tasks, isLoading, error } = getSummaryList()
  const [errors, setErrors] = useState<string[]>([])

  console.log(tasks)

  const TitleContainer = styled.div`
    display: flex;
    justify-content: start;
    margin-bottom: 10px;
  `

  const handleOnSubmit = async (url: string) => {
    const { taskId, error } = await requestTask(url)
    if (error) {
      setErrors([...errors, error.type])
      return
    }
    console.log(taskId)
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
