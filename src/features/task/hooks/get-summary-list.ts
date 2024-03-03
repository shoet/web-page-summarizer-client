import { fetcher } from '@/api/fetcher'
import { apiBaseUrl } from '@/config'
import { Task } from '@/types/task'
import useSWR from 'swr'

export const getSummaryList = () => {
  const url = `${apiBaseUrl}/task`
  const { data: tasks, isLoading, error, mutate } = useSWR<Task[]>(url, fetcher)

  return { tasks, isLoading, error, mutate }
}
