import decoratorCentered from "@storybook/addon-centered"
import { Logout } from "./Logout"

/**
 * See Storybook Docs: Writing Stories
 * https://storybook.js.org/docs/basics/writing-stories/
 */

export default {
  title: "Logout",
  decorators: [decoratorCentered],
}

export const example = () => <Logout />
