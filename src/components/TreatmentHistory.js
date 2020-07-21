import React, { Component } from "react";
import "../assests/style.css"
import Img from '../images/doctor.png';
import ItemHistory from './ItemHistory';
// const TreatmentHistory = (props) => {
class TreatmentHistory extends Component {
    constructor(props) {
        super(props)
        this.state = {
            history: [
                {
                    "name": "Jazef Sciffnee",
                    "diseases": [
                        {
                            "disease": "M6_Gratunious periodotitis"
                        },
                        {
                            "disease": "D5_Deep Caries"
                        },
                        {
                            "disease": "M1_Ritikio Andreritids"
                        },
                        {
                            "disease": "M6_Gratunious periodotitis"
                        },
                    ],
                    "date1": "26-04-2019",
                    "date2": "30-04-2019",
                    "image": "https://image.flaticon.com/icons/svg/2922/2922566.svg"
                },
                {
                    "name": "Jazef Sciffnee",
                    "diseases": [
                        {
                            "disease": "M6_Gratunious periodotitis"
                        },
                        {
                            "disease": "D5_Deep Caries"
                        },
                        {
                            "disease": "M1_Ritikio Andreritids"
                        },
                        {
                            "disease": "M6_Gratunious periodotitis"
                        },
                    ],
                    "date1": "26-04-2019",
                    "date2": "30-04-2019",
                    "image": "https://image.flaticon.com/icons/svg/2922/2922566.svg"
                },
                {
                    "name": "Jazef Sciffnee",
                    "diseases": [
                        {
                            "disease": "D5_Deep Caries"
                        },
                        {
                            "disease": "M1_Ritikio Andreritids"
                        },
                        {
                            "disease": "M6_Gratunious periodotitis"
                        },
                    ],
                    "date1": "26-04-2019",
                    "date2": "30-04-2019",
                    "image": "https://image.flaticon.com/icons/svg/2922/2922566.svg"
                },
                {
                    "name": "Jazef Sciffnee",
                    "diseases": [
                        {
                            "disease": "M6_Gratunious periodotitis"
                        },
                        {
                            "disease": "D5_Deep Caries"
                        },
                    ],
                    "date1": "26-04-2019",
                    "date2": "30-04-2019",
                    "image": "https://image.flaticon.com/icons/svg/2922/2922566.svg"
                },
            ],
            "current": [],
        }
    }

    // console.log(props.history)
    // const TreatmentSize = props.history.length
    // const history = props.history
    render() {
        return (
            <div className="treatmentHistory">
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <div>
                        Treatment history
                    </div>
                    <div style={{ backgroundColor: "#F1F7FC", borderRadius: "5px", padding: '2px', color: "#859AD0", marginLeft: "1em" }}>
                        {this.state.history.length}
                    </div>

                </div>
                <div style={{ overflowY: 'scroll', height: "40vh" }}>
                    {this.state.history.map((item, index) => (
                        <ItemHistory item={item} index={index} />
                    ))}
                </div>

            </div>
        )
    }
}

export default TreatmentHistory;