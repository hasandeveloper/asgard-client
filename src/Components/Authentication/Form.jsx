import React from 'react';

export const Form = (props) => {
  return (
    <div>
        <h2>
            <span>{props.errorData?.message}</span>
        </h2>

        <div>
            <label for="email">Email</label><br/>
            <input type="text" id="email" name="email" value={props.formData.user?.email} onChange={props.onChangeHandler}/>
        </div>

        <div>
            <label for="password">Password</label><br/>
            <input type="password" id="password" name="password" value={props.formData.user?.password} onChange={props.onChangeHandler} />
        </div>

    </div>
  )
}
