import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { Grid, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { InputComponent, SelectFieldComponent, TexareaFieldComponent } from '../../../../components/common/form-inputs/form-inputs.component'
import FileFieldComponent from '../../../../components/common/input-file/input-file.component'

import './add-bug-form.style.scss'

const validate = values => {
    const errors = {}
    if (!values.title) {
        errors.title = 'title required'
    }
    if (!values.author) {
        errors.author = 'author required'
    }
    if (!values.category) {
        errors.category = 'category required'
    }
    if (!values.description) {
        errors.description = 'description required'
    }
    if (!values.solution) {
        errors.solution = 'solution required'
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'formato de email incorrecto'
    }
    return errors;
}

const warn = values => {
    const warnings = {}
    if (values.title && values.title.length < 3) {
        warnings.title = 'Titulo un poco corto'
    }
    return warnings
}

const selectValues = [
    { text: 'Angular', value: 'angular' },
    { text: 'React', value: 'react' },
    { text: 'Vue', value: 'vue' }
]

let AddBugForm = (props) => {
    const { handleSubmit, onSubmit } = props
    return (
        <Grid className="padding">
            <Link to="/"><i className="material-icons arrow-back">arrow_back</i></Link>
            <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                <Row>
                    <Col md={6} mdOffset={3}>
                        <Field name="title" label="Title" component={InputComponent} type="text" inputClassName="add-bug-input-text" />
                        <Field name="author" label="Author" component={InputComponent} type="text" inputClassName="add-bug-input-text" />
                        <Field name="category" label="Category" component={SelectFieldComponent} selectClassName="add-bug-input-text" selectValues={selectValues} />
                        <Field name="description" label="Description" component={TexareaFieldComponent} />
                        <Field name="solution" label="Solution" component={TexareaFieldComponent} />
                        <Field name="file" component={FileFieldComponent} />
                        <Button className="save-btn" variant="raised" type="submit">Save</Button>
                    </Col>
                    <Col className="bug-icon-col"><i className="material-icons bug-icon">bug_report</i></Col>
                </Row>
            </form>
        </Grid>
    )
}

AddBugForm = reduxForm({
    form: 'add-bug',
    validate,
    warn
})(AddBugForm)

export default AddBugForm