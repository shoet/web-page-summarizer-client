import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { ErrorMessage } from '@/components/Molecules/ErrorMessage'
import { useSummaryList } from '@/features/task/hooks/get-summary-list'
import { requestTask } from '@/features/task/api/request-task'
import { UrlInputForm } from '@/features/task/components/UrlInputForm'
import { TaskList } from '@/features/task/components/TaskList'
import { Task } from '@/types/task'

export const TaskListPage = () => {
  const { tasks, isLoading, error } = useSummaryList([], 5000)
  const [errors, setErrors] = useState<string[]>([])
  const [tempTasks, setTempTasks] = useState<Task[]>([])

  useEffect(() => {
    setTempTasks(tasks)
  }, [tasks])

  const handleOnSubmit = async (url: string) => {
    const { error, taskId } = await requestTask(url)
    if (error) {
      setErrors([...errors, error.type])
      return
    } else {
      // サーバーから最新の一覧を取得する前に、依頼時に一旦追加する
      console.log(taskId)
      const task: Task = {
        taskId: taskId,
        title: '',
        pageUrl: url,
        taskStatus: 'request',
        createdAt: new Date().getTime(),
      }
      const newTasks = [task, ...tempTasks]
      setTempTasks(newTasks)
    }
  }

  const ErrorContainer = styled.div`
    margin-bottom: 10px;
  `

  const handleOnClickErrorClose = (idx: number) => {
    const newErrors = errors.filter((_, i) => i !== idx)
    setErrors(newErrors)
  }

  return (
    <div>
      {errors.length > 0 && (
        <ErrorContainer>
          {errors.map((error, idx) => {
            return (
              <div>
                <ErrorMessage
                  message={error}
                  key={idx}
                  onCloseClick={() => handleOnClickErrorClose(idx)}
                />
                {errors.length - 1 != idx && (
                  <div style={{ marginBottom: '5px' }} />
                )}
              </div>
            )
          })}
        </ErrorContainer>
      )}
      <UrlInputForm onSubmit={handleOnSubmit} />
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        <TaskList tasks={tempTasks} />
      )}
    </div>
  )
}
