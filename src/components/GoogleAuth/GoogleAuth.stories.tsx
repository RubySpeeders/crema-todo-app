import decoratorCentered from "@storybook/addon-centered"
import { GoogleAuth } from "./GoogleAuth"

/**
 * See Storybook Docs: Writing Stories
 * https://storybook.js.org/docs/basics/writing-stories/
 */

export default {
  title: "GoogleAuth",
  decorators: [decoratorCentered],
}

export const example = () => <GoogleAuth />
