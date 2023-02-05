import React,{useState} from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Modal from "./Modal";
export default {
  title: "ReactComponentLibrary/Timeline",
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => (
  <Modal show={true} onClose={true}>{args.children}</Modal>
);

export const MainModal = Template.bind({});
MainModal.args = {
  children: (
    <div>Modal</div>
  ),
};
