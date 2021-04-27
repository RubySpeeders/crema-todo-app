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

export const example = () => <TaskCounter />
