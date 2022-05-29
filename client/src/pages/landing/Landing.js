import axios from "axios"
import { useEffect } from "react"

function Landing() {
  useEffect (() => {
    axios.get("http://localhost:8000/")
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      console.log(err);
    })
  })
  return (
    <div>Landing</div>
  )
}

export default Landing