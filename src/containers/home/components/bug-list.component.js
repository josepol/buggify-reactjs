import React from 'react';

export default class BugListComponent extends React.Component {
    render() {
        return (
            <div className="row" style={style().bugListComponent}>
                {this.props.bugs && this.props.bugs.map((bug, i) => (
                    <div className="col-md-4" key={i}>
                        <div className="col-md-12" style={style(bug).bugListElement}>
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

const style = (bug) => {
    return {
        bugListComponent: {
            marginTop: '40px'
        },
        bugListElement: {
            backgroundImage: `url(${bug && bug.pictures[0] ? bug.pictures[0] : 'assets/imgs/default.png'})`,
            backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            padding: '10px',
            marginBottom: '30px'
        }
    }
}