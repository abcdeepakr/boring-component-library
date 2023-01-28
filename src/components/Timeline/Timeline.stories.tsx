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
      <TimelineItemDate>22 Jan, 2023</TimelineItemDate>
      <Separator />
      <TimelineItemContent>
        <TimelineItemTitle>Title</TimelineItemTitle>
        <TimelineItemBody>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem vel nostrum, voluptas quo aspernatur sed! Nesciunt
          ipsa, et, culpa excepturi aliquid vero sunt, asperiores eveniet saepe
          omnis quaerat dolorem tempore?
        </TimelineItemBody>
      </TimelineItemContent>
    </TimelineItem>
  ),
};
