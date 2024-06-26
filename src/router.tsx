import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import App from './App'
import { TaskListPage } from './pages/TaskListPage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<TaskListPage />} />
    </Route>
  )
)

export const Routes = () => <RouterProvider router={router} />
