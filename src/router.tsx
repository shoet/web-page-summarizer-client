import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import App from './App'
import { LoginPage } from './pages/LoginPage'
import { TaskListPage } from './pages/TaskListPage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<TaskListPage />} />
      <Route path="auth" element={<LoginPage />} />
    </Route>
  )
)

export const Routes = () => <RouterProvider router={router} />
