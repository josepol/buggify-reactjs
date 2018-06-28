import React from 'react'
import ReactModal from 'react-modal'

const customStyles = {
    content : {
      top: '50%',
      left: '50%',
      right: 'auto',
      width: '70%',
      transform: 'translate(-50%, -50%)',
      border: 'solid 1px #6574DB',
      backgroundColor: '#F8F8F8'
    }
  };

export default class BugInfoComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            isBugInfoModalOpen: false
        }
        this.closeBugInfoModal = this.closeBugInfoModal.bind(this)
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return {
            isBugInfoModalOpen: nextProps.isBugInfoModalOpen
        }
    }

    closeBugInfoModal = () => {
        console.log(this.state)
        this.setState({isBugInfoModalOpen: false}, () => {
            console.log(this.state)
        })
    }

    render() {
        return (
            <ReactModal
                isOpen={this.state.isBugInfoModalOpen}
                onRequestClose={this.closeBugInfoModal}
                style={customStyles}>
                <h1>Modal</h1>
                <button onClick={this.closeBugInfoModal}>close</button>
            </ReactModal>
        )
    }
}