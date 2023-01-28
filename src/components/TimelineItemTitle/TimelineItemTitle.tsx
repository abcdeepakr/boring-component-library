import React,{ReactNode, FC} from 'react'

export interface TimelineTitleProps {
    children: ReactNode
  }

const TimelineItemTitle: FC<TimelineTitleProps> =({children}:TimelineTitleProps) => {
  return (
    <div className='item-content__title'>{children}</div>
  )
}

export default TimelineItemTitle