import React, { Component } from 'react'
import API from '../API'

export default class NewRevisionModal extends Component {

    createRevision = e => {
        e.preventDefault()
        API.createRevision(e, this.props.selectedProject.id, this.props.username)
        .then(revision => {
            this.props.addRevision(revision)
        })
    }

    render() {
        return (
            <div className="modal">
                <div className="modal--element">
                    <h3 className="modal--header">
                        Create a new <span className="highlight">revision <br /> </span>
                    </h3>
                    <form onSubmit={this.createRevision} className="modal--form">
                        <input name="revision" className="modal--input" type="text"></input>
                        <button className="modal--submitbtn" type="submit" value="Add Revision">Create Revision</button>
                    </form>
                    <button onClick={this.props.hideModal}>Close</button>
                </div>
            </div>
        )
    }
}
