import './App.css'
import { MainLayout } from './components/Layout/MainLayout'
import { TaskListPage } from './features/task/pages'

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
