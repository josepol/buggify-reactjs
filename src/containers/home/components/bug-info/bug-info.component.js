import React from 'react'
import ReactModal from 'react-modal'

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
                <h1>Modal</h1>
                <button onClick={this.closeBugInfoModal}>close</button>
            </ReactModal>
        )
    }
}