// import React from "react"
import decoratorCentered from "@storybook/addon-centered"
import { FormNewTask } from "./FormNewTask"

/**
 * See Storybook Docs: Writing Stories
 * https://storybook.js.org/docs/basics/writing-stories/
 */

export default {
  title: "NewTaskForm",
  decorators: [decoratorCentered],
}

export const example = () => <FormNewTask />
