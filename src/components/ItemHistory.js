import React from "react";
import "../assests/style.css"

import sale from "../images/sale.png"
import { bold } from "ansi-colors";
import ItemDisease from "../components/ItemDisease";
const ItemHistory = (props) => {
    console.log(props.item)
    // console.log(key)
    const calenderImage = "https://image.flaticon.com/icons/svg/3174/3174440.svg"
    const item = props.item
    const url = "../images/sale.png"
    console.log("helloman : ", item.diseases)
    return (
        <div style={{ display: "flex", flexDirection: 'row', padding: '2em', backgroundColor: 'white', margin: '10px', justifyContent: 'space-between', alignItems: 'center' }}>
            {/* <div>
                <img
                    src={`${item.image}`} width="50" height="50" ></img>
            </div> */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div style={{ marginRight: '1em' }}>
                        <img
                            src={`${calenderImage}`} width="15" height="15" ></img>
                    </div>
                    <div style={{ color: "#CACDD5", fontSize: '0.8em' }}>
                        {item.date1}
                    </div>
                    <div style={{ color: "#CACDD5" }}>
                        -
                </div>
                    <div style={{ color: "#CACDD5", fontSize: '0.8em' }}>
                        {item.date2}
                    </div>

                </div>
                <div style={{ display: 'flex', flexDirection: 'column', marginTop: '7px' }}>
                    {item.diseases.map((itr, index) => (
                        <ItemDisease item={itr} />
                    ))}

                </div>
            </div>
            <div>
                <div style={{ display: "flex", flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div>
                        <img
                            src={`${item.image}`} width='30' height='30'></img>
                    </div>
                    <div style={{ color: "#5D72A9", fontWeight: "bold", padding: '1em' }}>
                        {item.name}
                    </div>
                </div>
            </div>

        </div >
    )
}

export default ItemHistory;