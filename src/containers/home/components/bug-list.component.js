import React from 'react';

export default class BugListComponent extends React.Component {

    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
        console.log(nextProps.bugs)
        if (nextProps.bugs && nextProps.bugs.length > 0) {
            const bugElements = document.getElementsByClassName('bugElement')
            console.log(bugElements)
            /*.map(element => element.addEventListener('mousemove', function checkHover() {
                console.log('asdasdasd')
            }))*/
        }
    }

    render() {
        return (
            <div className="row" style={style().bugListComponent}>
                {this.props.bugs && this.props.bugs.map((bug, i) => (
                    <div className="bugElement col-md-4" key={i}>
                        <div style={style(bug).bugListElement}>
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

const isHover = (element) => element && element.parentElement.querySelector(':hover') === element

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
            marginBottom: '35px'
        }
    }
}