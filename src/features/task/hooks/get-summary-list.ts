import { fetcher } from '@/api/fetcher'
import { apiBaseUrl } from '@/config'
import { Task } from '@/types/task'
import useSWR from 'swr'

export const getSummaryList = (init: Task[] = [], refreshInterval?: number) => {
  const url = `${apiBaseUrl}/task`
  const { data, isLoading, error, mutate } = useSWR<Task[]>(url, fetcher, {
    refreshInterval: refreshInterval || 0,
  })

  return {
    tasks: data || init,
    isLoading,
    error,
    mutate,
  }
}
