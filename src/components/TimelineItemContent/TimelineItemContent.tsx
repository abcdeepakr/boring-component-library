import React, { ReactNode, FC } from "react";

export interface TimelineItemContentProps{
  children: ReactNode
}
const TimelineItemContent:FC<TimelineItemContentProps> = ({children}:TimelineItemContentProps) => {
  return (
    <div className="timeline-item-content">
      {children}
    </div>
  );
}

export default TimelineItemContent;
