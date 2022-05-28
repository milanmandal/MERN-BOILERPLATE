import axios from "axios"
import { useEffect } from "react"

function Landing() {
  useEffect (() => {
    axios.get("http://localhost:8000/")
    .then(res => {
      console.log(res);
    })
  })
  return (
    <div>Landing</div>
  )
}

export default Landing