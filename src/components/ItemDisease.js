import React from "react";
import "../assests/style.css"

import sale from "../images/sale.png"
import { bold } from "ansi-colors";
const ItemDisease = (props) => {
    console.log(props.item)
    // console.log(key)

    const item = props.item
    const url = "../images/sale.png"
    return (
        <div style={{ fontWeight: 'bold', fontSize: '0.8em', color: "#737D88" }}>
            {item.disease}
        </div >
    )
}

export default ItemDisease;