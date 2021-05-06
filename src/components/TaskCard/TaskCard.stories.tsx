import decoratorCentered from "@storybook/addon-centered"
import { Meta, Story } from "@storybook/react"
import { Props, TaskCard } from "./TaskCard"

/**
 * See Storybook Docs: Writing Stories
 * https://storybook.js.org/docs/basics/writing-stories/
 */
const task = { id: "abc123", description: "do a story", isComplete: false }

export default {
  title: "TaskCard",
  decorators: [decoratorCentered],
  args: { task },
} as Meta<Props>

export const TaskTemplate: Story<Props> = (args) => <TaskCard {...args} />
