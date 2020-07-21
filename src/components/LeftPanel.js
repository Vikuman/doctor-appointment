import React from "react";
import "../assests/style.css"
const LeftPanel = (props) => {
    return (
        <div className="LeftPanel">
            <div style={{}}>
                <img
                    src={`${"https://image.flaticon.com/icons/svg/2099/2099153.svg"}`}
                    height="30"
                    width="30"
                ></img>
            </div>
            <div style={{}}>
                <img
                    src={`${"https://image.flaticon.com/icons/svg/2932/2932542.svg"}`}
                    height="30"
                    width="30"
                ></img>
            </div>
            <div style={{}}>
                <img
                    src={`${"https://image.flaticon.com/icons/svg/1828/1828490.svg"}`}
                    height="30"
                    width="30"
                ></img>
            </div>
        </div>
    )
}

export default LeftPanel;