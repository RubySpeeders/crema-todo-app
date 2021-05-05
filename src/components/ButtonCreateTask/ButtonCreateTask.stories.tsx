// import React from "react"
import { action } from "@storybook/addon-actions"
import decoratorCentered from "@storybook/addon-centered"
import { ButtonCreateTask } from "./ButtonCreateTask"

/**
 * See Storybook Docs: Writing Stories
 * https://storybook.js.org/docs/basics/writing-stories/
 */

export default {
  title: "ButtonCreateTask",
  decorators: [decoratorCentered],
}

export const example = () => (
  <ButtonCreateTask onShowModal={action("onShowModal")} />
)
