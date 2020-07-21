import React, { Component } from "react";
import "../assests/style.css"
import Profile from '../images/doctor.png'
import Gear from '../images/gear.png';
import Call from '../images/call.png';
import ReferralsList from './ReferralsList';
// const Bio = () => {
class Bio extends Component {
    constructor(props) {
        super(props)
        this.state = {
            referrals: [
                {
                    "image": "https://image.flaticon.com/icons/svg/2922/2922566.svg",
                    "name": "vikas",
                    "date": "13-02-2019"

                },
                {
                    "image": "https://image.flaticon.com/icons/svg/2922/2922566.svg",
                    "name": "vikas",
                    "date": "13-02-2019"

                },
                {
                    "image": "https://image.flaticon.com/icons/svg/2922/2922566.svg",
                    "name": "vikas",
                    "date": "13-02-2019"

                },
                {
                    "image": "https://image.flaticon.com/icons/svg/2922/2922566.svg",
                    "name": "vikas",
                    "date": "13-02-2019"

                },
                {
                    "image": "https://image.flaticon.com/icons/svg/2922/2922566.svg",
                    "name": "vikas",
                    "date": "13-02-2019"

                },
                {
                    "image": "https://image.flaticon.com/icons/svg/2922/2922566.svg",
                    "name": "vikas",
                    "date": "13-02-2019"

                },
                {
                    "image": "https://image.flaticon.com/icons/svg/2922/2922566.svg",
                    "name": "vikas",
                    "date": "13-02-2019"

                },
                {
                    "image": "https://image.flaticon.com/icons/svg/2922/2922566.svg",
                    "name": "vikas",
                    "date": "13-02-2019"

                },
                {
                    "image": "https://image.flaticon.com/icons/svg/2922/2922566.svg",
                    "name": "vikas",
                    "date": "13-02-2019"

                },
                {
                    "image": "https://image.flaticon.com/icons/svg/2922/2922566.svg",
                    "name": "vikas",
                    "date": "13-02-2019"

                },
                {
                    "image": "https://image.flaticon.com/icons/svg/2922/2922566.svg",
                    "name": "vikas",
                    "date": "13-02-2019"

                },
                {
                    "image": "https://image.flaticon.com/icons/svg/2922/2922566.svg",
                    "name": "vikas",
                    "date": "13-02-2019"

                },
                {
                    "image": "https://image.flaticon.com/icons/svg/2922/2922566.svg",
                    "name": "vikas",
                    "date": "13-02-2019"

                },
                {
                    "image": "https://image.flaticon.com/icons/svg/2922/2922566.svg",
                    "name": "vikas",
                    "date": "13-02-2019"

                },

            ]
        }
    }
    render() {
        return (
            <div className="referralsContainer" >
                <div className="referralsheading">
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <div>
                            Referrals
                    </div>
                        <div style={{ backgroundColor: "#F1F7FC", borderRadius: "5px", padding: '2px', color: "#859AD0", marginLeft: "2px" }}>
                            {this.state.referrals.length}
                        </div>

                    </div>

                    <div style={{ padding: "5px", fontSize: 10, color: "#0D53FD", backgroundColor: "#F1F7FC", borderRadius: "5px", }}>
                        Discount +$34
                </div>
                </div>
                <div>
                    <ReferralsList item={this.state.referrals} />
                </div>
            </div >
        )
    }
}

export default Bio;