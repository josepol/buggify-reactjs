import React from 'react'
import ReactModal from 'react-modal'
import { Grid, Row, Col } from 'react-bootstrap'

import './bug-info.component.scss'

export default class BugInfoComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            isBugInfoModalOpen: false,
        }
        this.closeBugInfoModal = this.closeBugInfoModal.bind(this)
    }

    closeBugInfoModal = () => {
        this.props.closeBugInfoModal()
    }

    render() {
        return (
            <ReactModal
                isOpen={this.props.isBugInfoModalOpen}
                onRequestClose={this.closeBugInfoModal}
                className="modal-content">
                <Grid className="padding scroll-y">
                    <Row>
                        <Col md={12}>
                            <label className="label">Title</label><br/>
                            <p>{this.props.bugSelected && this.props.bugSelected.title}</p>
                            <label className="label">Category</label><br/>
                            <p>{this.props.bugSelected && this.props.bugSelected.category}</p>
                            <label className="label">Author</label><br/>
                            <p>{this.props.bugSelected && this.props.bugSelected.author}</p>
                            <label className="label">Description</label><br/>
                            <p>{this.props.bugSelected && this.props.bugSelected.description}</p>
                            <label className="label">Solution</label><br/>
                            <p>{this.props.bugSelected && this.props.bugSelected.solution}</p>
                        </Col>
                    </Row>
                </Grid>
                <button className="close-btn" onClick={this.closeBugInfoModal}>close</button>
            </ReactModal>
        )
    }
}