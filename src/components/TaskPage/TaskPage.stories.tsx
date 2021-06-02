import decoratorCentered from "@storybook/addon-centered"
import { TaskPage } from "./TaskPage"

/**
 * See Storybook Docs: Writing Stories
 * https://storybook.js.org/docs/basics/writing-stories/
 */

export default {
  title: "TaskPage",
  decorators: [decoratorCentered],
}

export const example = () => <TaskPage />
