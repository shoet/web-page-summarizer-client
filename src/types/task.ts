import { Status } from '@/features/task/components/StatusBadge'

export type Task = {
  taskId: string
  taskStatus: Status
  pageUrl: string
  title: string
  createdAt: number
}
