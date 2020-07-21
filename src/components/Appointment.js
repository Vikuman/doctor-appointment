import React, { Component } from "react";
import "../assests/style.css"
import Img from '../images/doctor.png';
import ItemHistory from './ItemHistory';
// import Appointment from './Appointment'
// const Appointment = (props) => {
import ActiveAppointment from './ActiveAppointment';
class Appointment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Active: [
                {
                    "name": "vanshu",
                    "problem": "muscle pain",
                    "date": "23.07.2019",
                    "time": "02:30 PM",
                    "image": "https://image.flaticon.com/icons/svg/3174/3174924.svg",
                },
                {
                    "name": "sundar",
                    "problem": "Teeth problem",
                    "date": "23.07.2019",
                    "time": "02:30 PM",
                    "image": "https://image.flaticon.com/icons/svg/3174/3174924.svg",
                },
                {
                    "name": "sundar",
                    "problem": "Teeth problem",
                    "date": "23.07.2019",
                    "time": "02:30 PM",
                    "image": "https://image.flaticon.com/icons/svg/3174/3174924.svg",
                },
                {
                    "name": "sundar",
                    "problem": "Teeth problem",
                    "date": "23.07.2019",
                    "time": "02:30 PM",
                    "image": "https://image.flaticon.com/icons/svg/3174/3174924.svg",
                },
                {
                    "name": "sundar",
                    "problem": "Teeth problem",
                    "date": "23.07.2019",
                    "time": "02:30 PM",
                    "image": "https://image.flaticon.com/icons/svg/3174/3174924.svg",
                },
            ],
            futureActive: [],
            current: []
        }
    }
    componentWillMount() {
        const futureActive = this.state.Active.slice(1)
        const current = this.state.Active.slice(0, 1)
        this.setState({
            futureActive: futureActive,
            current: current
        })
    }

    render() {
        const calenderImage = "https://image.flaticon.com/icons/svg/3174/3174440.svg"
        const item = this.state.current[0]

        return (
            <div className="activeAppointment">
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <div>
                        Active Appointment
                    </div>
                    <div style={{ backgroundColor: "#F1F7FC", borderRadius: "5px", padding: '2px', color: "#859AD0", marginLeft: "1em" }}>
                        {this.state.Active.length}
                    </div>

                </div>
                <div style={{ display: "flex", flexDirection: 'column', overflowY: "scroll", height: '40vh' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#0D53FD', margin: '10px', justifyContent: 'space-between', alignItems: 'center' }}>
                        {/* <div style={{ backgroundColor: '#0D53FD' }}> */}

                        <div style={{ backgroundColor: "#0D53FD", padding: '2em' }}>
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <div style={{ marginRight: '1em' }}>
                                    <img
                                        src={`${calenderImage}`} width="15" height="15" ></img>
                                </div>
                                <div style={{ color: "#FFFFFF", fontSize: '0.8em' }}>
                                    {item.date}
                                </div>
                                <div style={{ color: "#FFFFFF" }}>
                                    -
                            </div>
                                <div style={{ color: "#FFFFFF", fontSize: '0.8em' }}>
                                    {item.time}
                                </div>

                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', marginTop: '7px', color: '#FFFFFF' }}>
                                {item.problem}
                            </div>
                        </div>
                        {/* <div style={{ display: "flex", backgroundColor: "#0044EA", flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}> */}
                        <div style={{ backgroundColor: "#0044EA", padding: '2em' }}>
                            <div style={{ display: "flex", flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <div>
                                    <img
                                        src={`${item.image}`} width='30' height='30'></img>
                                </div>
                                <div style={{ color: "#FFFFFF", fontWeight: "bold", padding: '1em' }}>
                                    {item.name}
                                </div>
                            </div>
                        </div>
                        {/* </div> */}
                    </div>
                    <div style={{}}>
                        {this.state.futureActive.map((item, index) => (
                            <ActiveAppointment item={item} />
                        ))}
                    </div>
                </div>

            </div>
        )
    }
}

export default Appointment;