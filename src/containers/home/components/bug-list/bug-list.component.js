import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap'
import BugInfoComponent from '../bug-info/bug-info.component'
import ConfirmationModal from '../../../../components/layout/confirmation-modal/confirmation-modal'

import './bug-list.component.style.scss';

export default class BugListComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            isBugInfoModalOpen: false,
            isBugDeleteConfirmationModalOpen: false,
            bugSelected: null
        }
    }

    openBugInfoModal = () => this.setState({isBugInfoModalOpen: true})

    closeBugInfoModal = () => this.setState({isBugInfoModalOpen: false})

    openDeleteConfirmationModal = () => this.setState({isBugDeleteConfirmationModalOpen: true})

    closeDeleteConfirmationModal = () => this.setState({isBugDeleteConfirmationModalOpen: false})

    clicked = (bugSelected) => {
        this.setState({
            bugSelected
        }, () => this.openBugInfoModal())
    }

    deleteClicked = (bugSelected) => {
        this.setState({
            bugSelected
        }, () => this.openDeleteConfirmationModal())
    }

    confirmBugDelete = () => {
        console.log('delete', this.state.bugSelected)
        this.closeDeleteConfirmationModal()
    }

    render() {
        return (
            <div className="row bug-list-container">
                {this.props.bugs && this.props.bugs.map((bug, i) => (
                    <div className="col-md-4 cont" key={i}>
                        <div className="bug-list-element">
                            <img onClick={() => this.clicked(bug)} className="bug-img img-fluid" src={bug.file ? `data:image/png;base64, ${Buffer.from(bug.file).toString('base64')}` : 'assets/imgs/default.png'} alt="bug-img"/>
                            <img onClick={() => this.deleteClicked(bug)} className="x-img" src="assets/imgs/x.jpeg" alt="bug-delete" />
                            <div className="bug-info">
                                <Row className="row">
                                    <Col className="bug-label" xs={12} md={5}>Title</Col>
                                    <Col xs={12} md={7}><b>{bug.title}</b></Col>
                                </Row>
                                <Row className="row">
                                    <Col xs={12} md={5}>Category</Col>
                                    <Col className="bug-description" xs={12} md={7}>{bug.category}</Col>
                                </Row>
                                <Row className="row">
                                    <Col xs={12} md={5}>Description</Col>
                                    <Col className="bug-description" xs={12} md={7}>{bug.description}</Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                ))}
                <BugInfoComponent
                    bugSelected={this.state.bugSelected}
                    isBugInfoModalOpen={this.state.isBugInfoModalOpen}
                    closeBugInfoModal={this.closeBugInfoModal} />
                <ConfirmationModal
                    bugSelected={this.state.bugSelected}
                    isConfirmationModalOpened={this.state.isBugDeleteConfirmationModalOpen}
                    closeConfirmationModal={this.closeDeleteConfirmationModal}
                    accept={this.confirmBugDelete}/>
            </div>
        )
    }
}