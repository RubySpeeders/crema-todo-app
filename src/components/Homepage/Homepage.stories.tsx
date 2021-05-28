import React from "react"
import decoratorCentered from "@storybook/addon-centered"
import { Homepage } from "./Homepage"

/**
 * See Storybook Docs: Writing Stories
 * https://storybook.js.org/docs/basics/writing-stories/
 */

export default {
  title: "Homepage",
  decorators: [decoratorCentered],
}

export const example = () => <Homepage />
