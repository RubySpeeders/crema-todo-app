import React from "react"

export function TaskCounter() {
  const [count, setCount] = React.useState(0)
  const changeCount = () => {
    setCount(15)
  }
  return (
    <div>
      <button onClick={changeCount}>Click me</button>
      <p>Count: {count}</p>
    </div>
  )
}
