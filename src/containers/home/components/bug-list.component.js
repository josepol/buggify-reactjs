import React from 'react';
import './bug-list.component.style.css';

export default class BugListComponent extends React.Component {

    clicked = (bugTitle) => {
        console.log('clicked', bugTitle);
    }

    render() {
        return (
            <div className="row bug-list-component">
                {this.props.bugs && this.props.bugs.map((bug, i) => (
                    <div className="bugElement col-md-4" key={i}>
                        <div onClick={() => this.clicked(bug.title)} className="bug-list-element">
                            <p><b>{bug.title}</b></p>
                            <p>Creada por <b>{bug.author}</b></p>
                            <p>{bug.description}</p>
                            <p><b>{bug.title}</b></p>
                            <p>Creada por <b>{bug.author}</b></p>
                            <p>{bug.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}