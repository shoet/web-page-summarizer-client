import './App.css'
import { MainLayout } from './components/Layout/MainLayout'
import { TaskListPage } from './pages/TaskListPage'

function App() {
  return (
    <>
      <MainLayout>
        <TaskListPage />
      </MainLayout>
    </>
  )
}

export default App
