import { fetcher } from '@/api/fetcher'
import { apiBaseUrl } from '@/config'
import { Task } from '@/types/task'
import useSWR from 'swr'

export const getSummaryList = (init: Task[] = []) => {
  const url = `${apiBaseUrl}/task`
  const { data, isLoading, error, mutate } = useSWR<Task[]>(url, fetcher)

  return {
    tasks: data || init,
    isLoading,
    error,
    mutate,
  }
}
