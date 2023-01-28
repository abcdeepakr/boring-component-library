import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Timeline from "../Timeline";
import TimelineItem from "../TimelineItem/TimelineItem";
import TimelineItemDate from "../TimelineItemDate/TimelineItemDate";
import Separator from "../Separator/Separator";
import TimelineItemContent from "../TimelineItemContent/TimelineItemContent";
import TimelineItemTitle from "../TimelineItemTitle/TimelineItemTitle";
import TimelineItemBody from "../TimelineItemBody/TimelineItemBody";
export default {
  title: "ReactComponentLibrary/Timeline",
  component: Timeline,
} as ComponentMeta<typeof Timeline>;

const Template: ComponentStory<typeof Timeline> = (args) => (
  <Timeline>{args.children}</Timeline>
);

export const MainTimeline = Template.bind({});
MainTimeline.args = {
  children: (
    <TimelineItem>
      <TimelineItemDate>28 Jan, 2023</TimelineItemDate>
      <Separator />
      <TimelineItemContent>
        <TimelineItemTitle>Today was a good day</TimelineItemTitle>
        <TimelineItemBody>
        Seven, even back do' Lil Joe
            I picked up the cash flow
            Then we played bones, and I'm yellin' "Domino!"
            Plus nobody I know got killed in South Central LA
            Today was a good day!
        </TimelineItemBody>
      </TimelineItemContent>
    </TimelineItem>
  ),
};
