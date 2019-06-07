import React, { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css";






class Modal extends Component {

    componentDidMount() {

        var modals = document.querySelectorAll('.modal')

        for (var i = 0; i < modals.length; i++){
            M.Modal.init(modals[i]);
        }

    }

    render() {

        return(
        <div>
            {/* <a className="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a> */}


            <div id="modal1" className="modal">
                <div className="modal-content">
                    <h4>Modal Header</h4>
                    <p>A bunch of text</p>
                </div>
                <div className="modal-footer">
                    <a href="/" className="modal-close waves-effect waves-green btn-flat">Agree</a>
                </div>
            </div>
        </div>
        );
    }

}

export default Modal;