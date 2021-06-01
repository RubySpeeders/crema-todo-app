// import { action } from "@storybook/addon-actions"
import decoratorCentered from "@storybook/addon-centered"
import { Meta, Story } from "@storybook/react"
import { FormNewTask, FormProps } from "./FormNewTask"

/**
 * See Storybook Docs: Writing Stories
 * https://storybook.js.org/docs/basics/writing-stories/
 */

export default {
  argTypes: {
    onAddTask: { action: "clicked" },
  },
  title: "FormNewTask",
  decorators: [decoratorCentered],
  args: { show: true },
} as Meta<FormProps>

const Template: Story<FormProps> = (argTypes) => <FormNewTask {...argTypes} />

export const FormNewTaskStoryVisible = Template.bind({})
FormNewTaskStoryVisible.args = {
  modal: true,
}
export const FormNewTaskStoryHidden = Template.bind({})
FormNewTaskStoryHidden.args = {
  modal: false,
}
