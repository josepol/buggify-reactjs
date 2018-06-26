import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavbarComponent from './../../components/layout/navbar/Navbar.component'
import AddBugForm from './components/add-bug-form.component/add-bug-form.component'

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

class AddBugContainer extends Component {

    submit = (values) => {
        console.log(values);
    }

    render() {
        return (
            <div>
                <NavbarComponent />
                <div className="container add-bug-container">
                    <AddBugForm onSubmit={this.submit} />
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBugContainer)