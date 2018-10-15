import React from 'react'
import ReactModal from 'react-modal'
import { Grid, Row, Col } from 'react-bootstrap'

import './confirmation-modal.scss'

export default class ConfirmationModal extends React.Component {
    constructor() {
        super()
        this.cancel = this.cancel.bind(this)
    }

    cancel = () => {
        this.props.closeConfirmationModal()
    }

    accept = () => {
        this.props.accept()
    }

    render() {
        return (
            <ReactModal
                isOpen={this.props.isConfirmationModalOpened}
                onRequestClose={this.cancel}
                className="modal-content confimation-modal">
                <Grid className="padding scroll-y">
                    <Row>
                        <Col className="delete-title" md={12}>Are you you want to delete {this.props.id}</Col>
                    </Row>
                </Grid>
                <button className="close-btn" onClick={this.cancel}>Cancel</button>
                <button className="close-btn" onClick={this.accept}>Accept</button>
            </ReactModal>
        )
    }
}