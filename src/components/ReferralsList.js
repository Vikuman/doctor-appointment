// import React from "react";
import React, { Component } from "react";
import "../assests/style.css"
import Profile from '../images/doctor.png'
import Gear from '../images/gear.png';
import Call from '../images/call.png';
import Item from './Item'
// class referralsList extends Component {
const referralsList = (props) => {
    const list = props.item

    // render() {
    // console.log(this.state.referrals)
    // const list = this.state.referrals
    return (
        <div className="referralsList">
            {list.map((item, index) => (
                <Item key={index} item={item} />
            ))}
        </div >
    )
    // }

}

export default referralsList;