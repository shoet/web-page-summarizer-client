import { Task } from '@/types/task'
import styled from 'styled-components'
import { StatusBadge } from '../StatusBadge'
import { dateStrFromTimestamp } from '@/util/date'

type TaskRowProps = {
  task: Task
  onDelete?: (id: string) => void
}

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
`

const Cell = styled.div`
  padding: 5px;
  overflow: hidden; // はみ出したものを隠す
  text-overflow: ellipsis; // はみ出したときに省略記号を表示
  white-space: nowrap; // はみ出したときに改行しない
`

const IdContainer = styled(Cell)`
  flex: 2;
  font-size: 14px;
`

const ContentContainer = styled(Cell)`
  flex: 3;
  display: flex;
  flex-direction: column;
  align-items: start;
`

const TitleContainer = styled(Cell)`
  font-weight: bold;
`
const UrlContainer = styled(Cell)`
  color: #555;
  font-size: 14px;
`
const StatusContainer = styled(Cell)`
  flex: 1;
  display: flex;
  justify-content: center;
`
const CreatedAtContainer = styled(Cell)`
  flex: 1;
  text-align: center;
  font-size: 14px;
`

export const TaskRow = (props: TaskRowProps) => {
  const { task } = props

  return (
    <RowContainer>
      <IdContainer>{task.taskId}</IdContainer>
      <ContentContainer>
        <TitleContainer>{task.title}</TitleContainer>
        <UrlContainer>{task.pageUrl}</UrlContainer>
      </ContentContainer>
      <StatusContainer>
        <StatusBadge status={task.taskStatus} />
      </StatusContainer>
      <CreatedAtContainer>
        {dateStrFromTimestamp(task.createdAt)}
      </CreatedAtContainer>
    </RowContainer>
  )
}
