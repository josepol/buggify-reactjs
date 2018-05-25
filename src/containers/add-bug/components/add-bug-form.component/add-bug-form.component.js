import React from 'react'
import {reduxForm, Field} from 'redux-form'

let AddBugForm = (props) => {
    const { handleSubmit, onSubmit } = props
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="title">Título</label>
                <Field name="title" component="input" type="text" />
            </div>
            <div>
                <label htmlFor="category">Categoria</label>
                <Field name="category" component="select" >
                    <option value="angular">Angular</option>
                    <option value="react">React</option>
                    <option value="vue">Vue</option>
                </Field>
            </div>
            <div>
                <label htmlFor="description">Descripción</label>
                <Field name="description" component="textarea"/>
            </div>
            <button type="submit">Send</button>
        </form>
    )
}

AddBugForm = reduxForm({
    form: 'add-bug'
})(AddBugForm)

export default AddBugForm