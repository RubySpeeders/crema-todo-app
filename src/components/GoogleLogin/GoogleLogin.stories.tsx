import decoratorCentered from "@storybook/addon-centered"
import { GoogleLogin } from "./GoogleLogin"

/**
 * See Storybook Docs: Writing Stories
 * https://storybook.js.org/docs/basics/writing-stories/
 */

export default {
  title: "GoogleLogin",
  decorators: [decoratorCentered],
}

export const example = () => <GoogleLogin />
