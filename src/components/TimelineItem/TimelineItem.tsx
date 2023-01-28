import React, {FC, ReactNode} from 'react'
import '../Timeline.css'


export interface TimeLineItemProps {
    children: ReactNode
  }

const TimelineItem: FC<TimeLineItemProps> =  ({children}:TimeLineItemProps) => {
  return (
    <div className="timeline-container__item">{children}</div>
  )
}

export default TimelineItem