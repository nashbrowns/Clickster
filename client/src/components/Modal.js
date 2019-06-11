import React from "react";

function Modal({matches})  {

        return(
        <div>
            <div id="modal1" className="modal">
                <div className="modal-content">
                    <h3>
                        {(matches === 0) ? "Womp womp womp...": null}
                        {(matches === 1) ? "Not the worst?": null}
                        {(matches === 2) ? "Yeah, keep praciticing": null}
                        {(matches === 3) ? "I had so much hope for you...": null}
                        {(matches === 4) ? "Not bad! Not good either though...": null}
                        {(matches === 5) ? "A step in the right direction.": null}
                        {(matches === 6) ? "Getting there!": null}
                        {(matches === 7) ? "Pretty amazing tbh": null}
                        {(matches === 8) ? "Nice Job!": null}
                        {(matches === 9) ? "Matched all cards! Congrats!": null}

                    </h3>
                    <h4>You got {matches} {(matches === 1) ? "match":"matches"}</h4>
                </div>
                <div className="modal-footer">
                    <a href="/" className="modal-close waves-effect waves-green btn-flat">Next Game</a>
                </div>
            </div>
        </div>
        );

}

export default Modal;