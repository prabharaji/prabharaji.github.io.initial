import React, { useState } from "react";

function Info(props){
    // console.log(props);
    const bookingInfo = props.info;
    const fname = bookingInfo.info.fname;
    const lname = bookingInfo.info.lname;
    const name = fname + " " + lname;
    return(
        <div className="info">
            <div>
                <img src="person.png" alt="person-img"/>
            </div>
            <div>{name}</div>
            <div className="properties">
                <div>
                    <button className="prop-btn">
                        <img src="view.png" alt="view-img"/>
                    </button>
                </div>
                <div>
                    <button className="prop-btn">
                        <img src="edit.png" alt="edit-img"/>
                    </button>
                </div>
                <div>
                    <button className="prop-btn">
                        <img src="delete.png" alt="delete-img"/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Info;