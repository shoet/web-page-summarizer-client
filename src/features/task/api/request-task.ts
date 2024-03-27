import { authFetcher } from '@/api/fetcher'
import { apiBaseUrl } from '@/config'

type RequestTaskResponse = {
  taskId: string
  error?: RequestTaskError
}

type RequestTaskError =
  | {
      type: 'InternalError'
      message: string
    }
  | {
      type: 'ValidateError'
      message: string
    }

export async function requestTask(url: string): Promise<RequestTaskResponse> {
  try {
    const data = {
      url: url,
    }
    const result = await authFetcher(`${apiBaseUrl}/task`, {
      method: 'POST',
      body: JSON.stringify(data),
    })
    return {
      taskId: result.taskId,
    }
  } catch (error) {
    return {
      taskId: '',
      error: {
        type: 'InternalError',
        message: (error as Error).message,
      },
    }
  }
}
