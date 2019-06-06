import React from 'react';

function Card({url,suit,value,id,style,passFunction}) {

    const backGround = {
        backgroundImage: "url(" + url + ")",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
    }

    const classes = "card "+suit+" "+value;

    return (
        <div className={classes} id={id} key={id} style={style.cardElem} >
            <div className="card-image waves-effect waves-block waves-light">
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4 transbox" data-id={id} data-suit={suit} data-value={value} data-rev={false} onClick={passFunction}>{/* left blank */}</span>
            </div>
            <div className="card-reveal" style={{...backGround, ...style.cardRev}}>
                {/* <span className="card-title grey-text text-darken-4 transbox" data-id={id} data-suit={suit} data-value={value} data-rev={true}></span> */}
            </div>
        </div>
    );
}

export default Card;