import React, { ReactNode, FC } from "react";

export interface TimelineItemDateProps{
  children: ReactNode
}
const TimelineItemDate:FC<TimelineItemDateProps> = ({children}:TimelineItemDateProps) => {
  return (
    <div className="timeline-item-date">
      {children}
    </div>
  );
}

export default TimelineItemDate;
