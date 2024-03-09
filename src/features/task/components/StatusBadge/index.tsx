import { Badge, BadgeProps } from '@/components/Element/Badge'
import { theme } from '@/theme'

export type Status = 'request' | 'processing' | 'complete' | 'failed'

type StatusBadgeProps = {
  status: Status
}

export const StatusBadge = (props: StatusBadgeProps) => {
  const { status } = props

  let badgeProps: BadgeProps = {
    color: theme.color.secondary,
    backgroundColor: theme.color.primary,
    fontSize: '16px',
  }
  let text: String = ''

  switch (status) {
    case 'request':
      badgeProps.backgroundColor = theme.statusColor.request.backgroundColor
      badgeProps.color = theme.statusColor.request.color
      text = 'Request'
      break
    case 'processing':
      badgeProps.backgroundColor = theme.statusColor.processing.backgroundColor
      badgeProps.color = theme.statusColor.processing.color
      text = 'Processing'
      break
    case 'complete':
      badgeProps.backgroundColor = theme.statusColor.complete.backgroundColor
      badgeProps.color = theme.statusColor.complete.color
      text = 'Complete'
      break
    case 'failed':
      badgeProps.backgroundColor = theme.statusColor.failed.backgroundColor
      badgeProps.color = theme.statusColor.failed.color
      text = 'Failed'
      break
  }

  return <Badge {...badgeProps}>{text}</Badge>
}
