import { apiBaseUrl } from '@/config'
import Axios, { InternalAxiosRequestConfig } from 'axios'

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

export const fetcher = (url: string) =>
  axios.request({ url }).then((res) => res.data)
