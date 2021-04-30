// import React from "react"
import decoratorCentered from "@storybook/addon-centered"
import { TaskCard } from "./TaskCard"

/**
 * See Storybook Docs: Writing Stories
 * https://storybook.js.org/docs/basics/writing-stories/
 */

export default {
  title: "TaskCard",
  decorators: [decoratorCentered],
}

export const example = () => (
  <TaskCard task={{ id: 1, task: "finish the app", status: false }} />
)
