import { apiBaseUrl } from '@/config'
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
