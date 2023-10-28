import { Link } from "react-router-dom"

import { coData } from "../../data/coData"

export const Title = () => {
  return (
    <Link to="/">
        <h1>{coData.title}</h1>
    </Link>
  )
}
