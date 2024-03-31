import { apiBaseUrl } from '@/config'
import { fetchAuthSession } from '@aws-amplify/auth'
import Axios, { AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios'

export const axios = Axios.create({
  baseURL: apiBaseUrl,
})

function axiosRequestInterceptor(
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig {
  return config
}

function axiosResponseInterceptor(response: any) {
  return response
}

function axiosErrorInterceptor(error: any) {
  return Promise.reject(error)
}

axios.interceptors.request.use(axiosRequestInterceptor)
axios.interceptors.response.use(axiosResponseInterceptor, axiosErrorInterceptor)

type params = Omit<AxiosRequestConfig, 'url'>

export const fetcher = async (url: string, params?: params) => {
  try {
    const response = await axios.request({ url, ...params })
    return response.data
  } catch (err) {
    console.log('network error')
    throw err
  }
}

export const authFetcher = async (url: string, params?: RequestInit) => {
  const session = await fetchAuthSession()
  const accessToken = session.tokens?.accessToken

  const newParams: RequestInit = {
    ...params,
    method: params?.method || 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...params?.headers,
    },
  }
  if (accessToken) {
    newParams.headers = {
      ...params?.headers,
      authorization: `Bearer ${accessToken}`,
    }
  } else {
    console.log('No token')
  }
  return fetch(url, newParams).then((res) => res.json())
}
