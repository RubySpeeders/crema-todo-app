import decoratorCentered from "@storybook/addon-centered"
import { Login } from "./Login"

/**
 * See Storybook Docs: Writing Stories
 * https://storybook.js.org/docs/basics/writing-stories/
 */

export default {
  title: "Login",
  decorators: [decoratorCentered],
}

export const example = () => <Login />
