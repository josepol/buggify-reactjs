import React from 'react'
import { TextField, MenuItem, Input, withStyles } from '@material-ui/core'
import Select from '@material-ui/core/Select';

import './form-inputs.style.css'

export const InputFieldComponent = ({input, label, type, inputClassName, meta: {touched, error, warning}}) => (
    <div>
        <label>{label}</label>
        <TextField className={inputClassName} type={type} {...input} />
        {touched && error && <span className="error-msg">{error}</span>}
    </div>
)

const SelectFieldComponent = ({input, label, type, selectValues, value, selectClassName, meta: {touched, error, warning}}) => {

    const onSelectChange = (event) => {
        value = event.target.value
    }

    return (
        <div>
            <Select {...input} native={true}
                input={<Input name="category" id="" />}
                value={value | '2'}
                onChange={(event) => onSelectChange(event)}>
                {/*{selectValues.map((value, i) => (<MenuItem 
                    key={i} 
                    value={value.value}
                >{value.text}</MenuItem>))}*/}
                <option value="2">asdas</option>
                <option value="3">asdasddd</option>
            </Select>
            {/*<select {...input} >
            {selectValues.map((value, i) => (<option 
                key={i} 
                value={value.value}
            >{value.text}</option>))}
            </select>*/}
        </div>
    )
}

const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formControl: {
      margin: theme.spacing.unit,
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing.unit * 2,
    },
  });

export default withStyles(styles)(SelectFieldComponent)