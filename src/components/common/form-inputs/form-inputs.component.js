import React from 'react'

import './form-inputs.style.scss'

export const InputComponent = ({ input, type, label, placeholder, meta: { touched, submitFailed, error, warning } }) => (
    <React.Fragment>
        {label && <label className="label">{label}</label>}
        <input type={type} {...input} placeholder={placeholder} />
        <p className="error-msg">{submitFailed && error && <span>{error}</span>}</p>
        <p className="warning-msg">{submitFailed && warning && <span>{warning}</span>}</p>
    </React.Fragment>
)

export const SelectFieldComponent = ({ input, label, type, selectValues, selectClassName, meta: { touched, error, warning } }) => (
    <React.Fragment>
        <label className="label">{label}</label><br />
        <select>
            {selectValues.map((value, i) => (<option key={i} value={value.value}>{value.text}</option>))}
        </select>
    </React.Fragment>
)

export const TexareaFieldComponent = ({ input, label, meta: { touched, error, warning, submitFailed } }) => (
    <React.Fragment>
        <label className="label">{label}</label><br />
        <textarea {...input} cols="30" rows="4"></textarea>
        <p className="error-msg">{submitFailed && error && <span>{error}</span>}</p>
        <p className="warning-msg">{submitFailed && warning && <span>{warning}</span>}</p>
    </React.Fragment>
)