import React from 'react'
import { FILTER_STATUS } from '../../Utils/ApiUrl'

const FilterTask = (props) => {
    const filters = ['to_do', 'in_progress', 'pending', 'done']
    const onChangeHandler = (e) => {
        props.dispatch({
            type: FILTER_STATUS,
            payload: e.target.value
        })
    }

  return (
    <select onChange={onChangeHandler}>
        <option value="">Select</option>
        {filters.map((filter) =>{
            return <option value={filter}>{filter}</option>
        })}
    </select>
  )
}

export default FilterTask