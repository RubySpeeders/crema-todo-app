import { action } from "@storybook/addon-actions"
import decoratorCentered from "@storybook/addon-centered"
import { FormNewTask } from "./FormNewTask"

/**
 * See Storybook Docs: Writing Stories
 * https://storybook.js.org/docs/basics/writing-stories/
 */

export default {
  title: "FormNewTask",
  decorators: [decoratorCentered],
}

export const example = () => <FormNewTask onTaskAdd={action("onTaskAdd")} />
