import React, { ReactNode, FC } from "react";

export interface TimelineItemBodyProps{
  children: ReactNode
}
const TimelineItemBody:FC<TimelineItemBodyProps> = ({children}:TimelineItemBodyProps) => {

  return (
    <div className="item-content__body">
      {children}
    </div>
  );
}

export default TimelineItemBody;
