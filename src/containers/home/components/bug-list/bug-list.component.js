import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap'


import './bug-list.component.style.scss';

export default class BugListComponent extends React.Component {

    clicked = (bugTitle) => {
        console.log('clicked', bugTitle);
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
                                    <Col className="bug-label" xs={12} md={4}>Título</Col>
                                    <Col xs={12} md={6}><b>{bug.title}</b></Col>
                                </Row>
                                <Row className="row">
                                    <Col xs={12} md={4}>Autor</Col>
                                    <Col xs={12} md={6}><b>{bug.author}</b></Col>
                                </Row>
                                <Row className="row">
                                    <Col xs={12} md={4}>Descripción</Col>
                                    <Col className="bug-description" xs={12} md={6}>{bug.description}</Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}