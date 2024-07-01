import React from 'react'
import { FILTER_TASK } from '../../Utils/ApiUrl'

const SearchTask = (props) => {

   const onChangeHandler = (e) => {
        props.dispatch({
            type: FILTER_TASK,
            payload: e.target.value
        })
   } 
  return (
    <input type="text" onChange={onChangeHandler} placeholder="Search here...."/>
  )
}

export default SearchTask