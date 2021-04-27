// import React from "react"
import decoratorCentered from "@storybook/addon-centered"
import { CreateTaskButton } from "./CreateTaskButton"

/**
 * See Storybook Docs: Writing Stories
 * https://storybook.js.org/docs/basics/writing-stories/
 */

export default {
  title: "CreateTaskButton",
  decorators: [decoratorCentered],
}

export const example = () => <CreateTaskButton />
