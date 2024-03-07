import { Task } from '@/types/task'
import styled from 'styled-components'
import { StatusBadge } from '../StatusBadge'

type TaskRowProps = {
  task: Task
  onDelete?: (id: string) => void
}

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
const IdContainer = styled.div`
  flex: 2;
  font-size: 14px;
`

const ContentContainer = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  align-items: start;
`

const TitleContainer = styled.div`
`
const UrlContainer = styled.div`
  font-size: 14px;
`
const StatusContainer = styled.div`
  flex: 1;
  text-align: center;
`
const CreatedAtContainer = styled.div`
  flex: 1;
  text-align: center;
  font-size: 14px;
`

export const TaskRow = (props: TaskRowProps) => {
  const { task, onDelete } = props

  return (
    <RowContainer>
      <IdContainer>{task.id}</IdContainer>
      <ContentContainer>
        <TitleContainer>{task.title}</TitleContainer>
        <UrlContainer>{task.pageUrl}</UrlContainer>
      </ContentContainer>
      <StatusContainer>
        <StatusBadge status={task.taskStatus} />
      </StatusContainer>
      <CreatedAtContainer>{task.createdAt}</CreatedAtContainer>
    </RowContainer>
  )
}
