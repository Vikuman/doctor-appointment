import React from "react";
import "../assests/style.css"

import sale from "../images/sale.png"
import { bold } from "ansi-colors";
const Item = (props) => {
    console.log(props.item)
    // console.log(key)

    const item = props.item
    const url = "../images/sale.png"
    return (
        <div style={{ display: "flex", flexDirection: 'row', padding: '10px' }}>
            <div>
                <img
                    src={`${item.image}`} width="40" height="40" ></img>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: '1em' }}>
                <div style={{ color: "#858A93" }}>
                    {item.name}
                </div>
                <div style={{ fontSize: '0.8em', color: '#CDD0D7' }}>
                    {item.date}
                </div>

            </div>

        </div >
    )
}

export default Item;