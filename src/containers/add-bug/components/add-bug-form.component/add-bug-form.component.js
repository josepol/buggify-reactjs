import React from 'react'
import {reduxForm, Field} from 'redux-form'
import { Grid, Row, Col, Media, Button } from 'react-bootstrap'
import { Paper, Button } from '@material-ui/core'
import SelectFieldComponent, { InputFieldComponent } from '../../../../components/commons/form-inputs/form-inputs.component'

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
        <Media>
            <Media.Left><label>{label}</label></Media.Left>
            <Media.Right><input className={inputClassName} type={type} {...input} />
                {touched && error && <span>{error}</span>}
            </Media.Right>
        </Media>
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
            <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                <Paper className="paper-container">
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
                        <input type="submit" value="test" />
                            <Button variant="raised" type="submit">Guardar</Button>
                        </Col>
                    </Row>
                </Paper>
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