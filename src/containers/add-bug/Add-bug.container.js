import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import NavbarComponent from './../../components/layout/navbar/Navbar.component'

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}


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

class AddBugContainer extends Component {

    submit = (values) => {
        console.log(values);
    }

    render() {
        return (
            <div>
                <NavbarComponent />
                <div className="container">
                    <AddBugForm onSubmit={this.submit} />
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBugContainer)