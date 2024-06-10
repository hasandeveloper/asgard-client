import React from 'react';

export const Form = (props) => {

  return (
    <div>
        <h2>{props.errorData?.message}</h2>

        <div>
            <label for="title">Title</label>
            <input type="text" id="title" name="title" value={props.taskFormData.task?.title} onChange={props.onChangehandler}/>
        </div>

        <div>
            <label for="description">Description</label>
            <input type="text" id="description" name="description" value={props.taskFormData.task?.description} onChange={props.onChangehandler} />
        </div>

        <div>
            <label htmlFor="status">Status</label>
            <select
                id="status"
                name="status"
                value={props.taskFormData.task?.status}
                onChange={props.onChangehandler}
            >
                <option value="">Select</option>
                <option value="pending">Pending</option>
                <option value="in_progress">In Progress</option>
                <option value="to_do">To Do</option>
                <option value="done">Done</option>
            </select>
        </div>
    </div>
  )
}

export default Form;