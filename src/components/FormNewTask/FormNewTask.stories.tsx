import decoratorCentered from "@storybook/addon-centered"
// import React from "react"
import { FormNewTask } from "./FormNewTask"

/**
 * See Storybook Docs: Writing Stories
 * https://storybook.js.org/docs/basics/writing-stories/
 */

export default {
  title: "FormNewTask",
  decorators: [decoratorCentered],
}

export const example = () => (
  <FormNewTask
    onAddTask={(text) => {
      console.log(text)
    }}
  />
)
