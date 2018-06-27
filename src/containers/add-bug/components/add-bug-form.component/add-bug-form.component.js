import React from 'react'
import {reduxForm, Field} from 'redux-form'
import { Grid, Row, Col, Media, Button } from 'react-bootstrap'

import './add-bug-form.style.scss'

const validate = values => {
    const errors = {}
    if (!values.title) {
        errors.title = 'titulo requerido'
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

const InputFieldComponent = ({input, label, type, inputClassName, meta: {touched, error, warning, submitFailed}}) => (
    <div>
        <label>{label}</label>
        <input className={inputClassName} type={type} {...input} />
        {submitFailed && error && <span className="error-msg">{error}</span>}
    </div>
)

const SelectFieldComponent = ({input, label, type, selectValues, selectClassName, meta: {touched, error, warning}}) => (
    <div>
        <label>{label}</label>
        <select>
            {selectValues.map((value, i) => (<option key={i} value={value.value}>{value.text}</option>))}
        </select>
    </div>
)

const selectValues =  [
    {text: 'Angular', value: 'angular'},
    {text: 'React', value: 'react'},
    {text: 'Vue', value: 'vue'}
]

let AddBugForm = (props) => {
    const { handleSubmit, onSubmit } = props
    return (
        <Grid className="padding">
            <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                <Row>
                    <Col md={4} xsOffset={4}>
                        <Field name="title" label="Título" component={InputFieldComponent} type="text" inputClassName="add-bug-input-text" />
                    </Col>
                </Row>
                <Row>
                    <Col md={4} xsOffset={4}>
                        <Field name="email" component={InputFieldComponent} type="text" label="Email" inputClassName="add-bug-input-text" />
                    </Col>
                </Row>
                <Row>
                    <Col md={4} xsOffset={4}>
                        <Field name="category" label="Categoria" component={SelectFieldComponent} selectClassName="add-bug-input-text" selectValues={selectValues}  />
                    </Col>
                </Row>
                <Row>
                    <Col md={4} xsOffset={4}>
                        <label>Descripción</label>
                        <Field name="description" component="textarea"/>
                    </Col>
                </Row>
                <Row>
                    <Col md={4} xsOffset={4}>
                        <Button variant="raised" type="submit">Guardar</Button>
                    </Col>
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