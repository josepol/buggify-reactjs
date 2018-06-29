import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap'
import BugInfoComponent from '../bug-info/bug-info.component'

import './bug-list.component.style.scss';

export default class BugListComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            isBugInfoModalOpen: false
        }
    }

    openBugInfoModal = () => this.setState({isBugInfoModalOpen: true})

    closeBugInfoModal = () => this.setState({isBugInfoModalOpen: false})

    clicked = (bugTitle) => {
        this.openBugInfoModal()
    }

    render() {
        return (
            <div className="row bug-list-container">
                {this.props.bugs && this.props.bugs.map((bug, i) => (
                    <div className="col-md-4 cont" key={i}>
                        <div className="bug-list-element" onClick={() => this.clicked(bug.title)}>
                            <img className="bug-img img-fluid" src="./assets/imgs/default.png" alt="bug-img"/>
                            <div className="bug-info">
                                <Row className="row">
                                    <Col className="bug-label" xs={12} md={4}>Title</Col>
                                    <Col xs={12} md={6}><b>{bug.title}</b></Col>
                                </Row>
                                <Row className="row">
                                    <Col xs={12} md={4}>Author</Col>
                                    <Col xs={12} md={6}><b>{bug.author}</b></Col>
                                </Row>
                                <Row className="row">
                                    <Col xs={12} md={4}>Description</Col>
                                    <Col className="bug-description" xs={12} md={6}>{bug.description}</Col>
                                </Row>
                                <Row className="row">
                                    <Col xs={12} md={4}>Solution</Col>
                                    <Col className="bug-description" xs={12} md={6}>{bug.solution}</Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                ))}
                <button onClick={this.closeBugInfoModal}>close</button>
                <BugInfoComponent isBugInfoModalOpen={this.state.isBugInfoModalOpen} closeBugInfoModal={this.closeBugInfoModal} />
            </div>
        )
    }
}