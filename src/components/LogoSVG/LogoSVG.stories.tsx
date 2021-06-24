import decoratorCentered from "@storybook/addon-centered"
import { LogoSVG } from "./LogoSVG"

/**
 * See Storybook Docs: Writing Stories
 * https://storybook.js.org/docs/basics/writing-stories/
 */

export default {
  title: "LogoSVG",
  decorators: [decoratorCentered],
}

export const example = () => <LogoSVG />
