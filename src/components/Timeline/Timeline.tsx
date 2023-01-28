import React,{ReactNode,FC} from 'react'

import TimelineItem from '../TimelineItem/TimelineItem'
export interface TimeLineProps {
  children: ReactNode
}

const Timeline: FC<TimeLineProps> =({children}:TimeLineProps) => {
  return (
    <>
      {children}
    </>
  )
}

export default Timeline