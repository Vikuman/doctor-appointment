import React, { Component } from "react";
import "./assests/style.css";
import ReactDOM from 'react-dom';
import DiscountLevel from "./components/DiscountLevel";
import Bio from "./components/Bio";
import TreatmentHistory from "./components/TreatmentHistory";
import Referrals from "./components/Referrals";
import Appointment from "./components/Appointment";
import LeftPanel from "./components/LeftPanel";
import GoogleLogin from 'react-google-login';
// import { url } from "inspector";

class DoctorAppointment extends Component {
    constructor(props) {
        super(props)
        this.state = {

            "login": false,
            "googleName": "",
            "googleEmail": "",
            "googleProfile": "",
        }
    }

    afterLogin() {
        if (this.state.login) {
            return (
                <div className="container">
                    <div style={{ padding: '2em', backgroundColor: 'white' }}>
                        <LeftPanel />
                    </div>
                    <div className="appointment">
                        <Appointment />
                        <TreatmentHistory history={this.state.history} current={this.state.current} />

                        {/* <Bio /> */}
                    </div>
                    <div className="profile">
                        <div>
                            <DiscountLevel />
                        </div>
                        <div>
                            <Bio name={this.state.googleName} image={this.state.googleProfile} email={this.state.googleEmail} />
                        </div>
                        <div>
                            <Referrals />
                        </div>
                    </div>
                </div>
            )
        }
    }
    responseGoogle = (response) => {
        console.log(response)
        this.setState({
            "googleName": response.profileObj.name,
            "googleEmail": response.profileObj.email,
            "googleProfile": response.profileObj.imageUrl,
            "login": true,
        })
    }
    googleLogin() {
        const Background = "https://image.freepik.com/free-photo/doctor-s-stethoscope-with-blue-background_23-2147652363.jpg"
        if (!this.state.login) {
            return (
                <div style={{
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    margin: '-10px',
                    minHeight: "100vh",
                    backgroundImage: "url(" + Background + ")",
                    display: 'flex',
                    flexDirection: "column",
                    alignItems: 'center',
                    alignContent: 'space-between',
                    height: '100%'
                }}>
                    <div style={{ padding: '5em', fontSize: '30px', color: "#FFFFFF", fontWeight: 'bold' }}>
                        Doctor Appointment Login
                    </div>
                    <div stylel={{ padding: '2em' }}>
                        <GoogleLogin
                            clientId="9558759891-ovdo7fg7hpcsr6jpnvd97r7mq4t2qu5o.apps.googleusercontent.com"
                            buttonText="Login with Google"
                            onSuccess={this.responseGoogle}
                            onFailure={this.responseGoogle}
                            cookiePolicy={'single_host_origin'}
                        />
                    </div>
                </div>
            )
        }
    }

    render() {
        return (
            <div >
                {this.afterLogin()}
                {this.googleLogin()}


                {/* <div className="">Quizeeee</div> */}
            </div>
        );
    }
}

ReactDOM.render(<DoctorAppointment />, document.getElementById("root"));