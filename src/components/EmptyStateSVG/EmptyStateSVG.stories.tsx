import decoratorCentered from "@storybook/addon-centered"
import { EmptyStateSVG } from "./EmptyStateSVG"

/**
 * See Storybook Docs: Writing Stories
 * https://storybook.js.org/docs/basics/writing-stories/
 */

export default {
  title: "EmptyStateSVG",
  decorators: [decoratorCentered],
}

export const example = () => <EmptyStateSVG />
