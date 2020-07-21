import React from "react";
import "../assests/style.css"

import sale from "../images/sale.png"
import { bold } from "ansi-colors";
const DiscountLevel = () => {
    return (
        <div className="discountLevel">
            <div className="discountLvlText">
                <div className="imageAndText">
                    <div>
                        <img src={sale} height="15" width="15" />
                    </div>
                    <div style={{ marginLeft: "5px", }}>
                        Your discount lvl
                    </div>
                </div>
                <div style={{ fontSize: 10, color: '#859AD0' }}>
                    How to increase the discount?
                </div>
            </div>
            <div style={{ marginRight: 0, fontSize: 20, color: '#859AD0' }}>
                8%
            </div>
        </div >
    )
}

export default DiscountLevel;