import { useParams } from "react-router-dom"

export const UpdateTask = () => {
    const { id } = useParams();
    debugger;
// take object from useReducer state and iterate in form once you change then do update request to server and check errors  then do route to home once all success, home will do get request again howere ther you will get update objects.
  return (
    <div>UpdateTask</div>
  )
}
