import React from 'react'
import {reduxForm, Field} from 'redux-form'

let AddBugForm = (props) => {
    const { handleSubmit, onSubmit } = props
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="name">Name</label>
                <Field name="name" component="input" type="text" />
            </div>
            <button type="submit">Send</button>
        </form>
    )
}

AddBugForm = reduxForm({
    form: 'add-bug'
})(AddBugForm)

export default AddBugForm