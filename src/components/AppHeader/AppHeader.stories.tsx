// import React from "react"
import decoratorCentered from "@storybook/addon-centered"
import { AppHeader } from "./AppHeader"

/**
 * See Storybook Docs: Writing Stories
 * https://storybook.js.org/docs/basics/writing-stories/
 */

export default {
  title: "AppHeader",
  decorators: [decoratorCentered],
}

export const example = () => <AppHeader />
