// import React from "react"
import decoratorCentered from "@storybook/addon-centered"
import { TaskCounter } from "./TaskCounter"

/**
 * See Storybook Docs: Writing Stories
 * https://storybook.js.org/docs/basics/writing-stories/
 */

export default {
  title: "TaskCounter",
  decorators: [decoratorCentered],
}

const completedTasks = [
  { id: "123ABC", description: "let's do this", isComplete: true },
]

export const example = () => <TaskCounter completedTasks={completedTasks} />
