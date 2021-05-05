import decoratorCentered from "@storybook/addon-centered"
import { Meta, Story } from "@storybook/react"
import { FormNewTask, Props } from "./FormNewTask"

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
} as Meta<Props>

const Template: Story<Props> = (argTypes) => <FormNewTask {...argTypes} />

export const FormNewTaskStory = Template.bind({})
