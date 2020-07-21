import React from "react";
import "../assests/style.css"
import Profile from '../images/doctor.png'
import Gear from '../images/gear.png';
import Call from '../images/call.png';
const Bio = (props) => {
    const name = props.name;
    const image = props.image;
    const email = props.email;
    return (
        <div className="bioContainer">
            <div style={{ alignSelf: "flex-end" }}>
                <img src={Gear} height="20" width="20" />
            </div>
            <div style={{ backgroundColor: "#E5E7E7", borderRadius: "20px", margin: 10 }}>
                <img src={`${image}`} width="100" height="100" />
                {/* <img src={Profile} width="100" height="100" /> */}

            </div>
            <div style={{ fontWeight: 'bold', fontSize: 20 }}>
                {/* Isobella Patterson */}
                {name}
            </div>
            <div style={{ fontSize: 10 }}>
                {/* Aurora */}
                {email}
            </div>
            <div style={{ paddingTop: 25 }}>
                <div style={{ borderRadius: "30px", backgroundColor: "white", paddingTop: "1em", paddingLeft: "3em", paddingRight: "3em", paddingBottom: "1em", fontSize: 10, display: "flex", flexFlow: "row nowrap" }}>
                    <div>
                        <img src={Call} height="10" width="10" />
                    </div>

                    <div style={{ marginLeft: 5 }}>
                        +91-9876543210
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Bio;