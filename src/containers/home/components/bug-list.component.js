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
                    <div className="col-md-4" key={i}>
                        <div className="bug-list-element" onClick={() => this.clicked(bug.title)}>
                            <img className="bug-img img-fluid" src="./assets/imgs/default.png" alt="bug-img"/>
                            <div className="bug-info">
                                <Row>
                                    <Col md={4}>Título</Col>
                                    <Col md={8}><b>{bug.title}</b></Col>
                                </Row>
                                <Row>
                                    <Col md={4}>Autor</Col>
                                    <Col md={8}><b>{bug.author}</b></Col>
                                </Row>
                                <Row>
                                    <Col md={4}>Descripción</Col>
                                    <Col md={8}><b>{bug.description}</b></Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}