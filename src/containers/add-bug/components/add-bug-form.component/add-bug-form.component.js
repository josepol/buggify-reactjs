import React from 'react'
import {reduxForm, Field} from 'redux-form'
import { Grid, Row, Col, Button } from 'react-bootstrap'
import './add-bug-form.style.css'

const validation = values => {
    const errors = {}
    if (!values.title) {
        errors.title = 'titulo requerido'
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'formato de email incorrecto'
    }
    return errors;
}

const warning = values => {
    const warnings = {}
    if (values.title && values.title.length < 3) {
        warnings.title = 'Titulo un poco corto'
    }
    return warnings
}

const inputFieldComponent = ({input, label, type, inputClassName, meta: {touched, error, warning}}) => (
    <div>
        <label>{label}</label>
        <input className={inputClassName} type={type} {...input} />
        {touched && error && <span>{error}</span>}
    </div>
)

const selectFieldComponent = ({input, label, type, selectValues, selectClassName, meta: {touched, error, warning}}) => (
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
        <Grid>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                    <Col md={6} xsOffset={3}>
                        <Field name="title" label="Título" component={inputFieldComponent} type="text" inputClassName="add-bug-input-text" />
                    </Col>
                </Row>
                <Row>
                    <Col md={6} xsOffset={3}>
                        <Field name="email" component={inputFieldComponent} type="text" label="Email" inputClassName="add-bug-input-text" />
                    </Col>
                </Row>
                <Row>
                    <Col md={6} xsOffset={3}>
                        <Field name="category" label="Categoria" component={selectFieldComponent} selectClassName="add-bug-input-text" selectValues={selectValues}  />
                    </Col>
                </Row>
                <Row>
                    <Col md={6} xsOffset={3}>
                        <label>Descripción</label>
                        <Field name="description" component="textarea"/>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} xsOffset={3}>
                        <button type="submit">Send</button>
                        <Button/>
                    </Col>
                </Row>
            </form>
        </Grid>
    )
}

AddBugForm = reduxForm({
    form: 'add-bug',
    validate: validation,
    warn: warning
})(AddBugForm)

export default AddBugForm