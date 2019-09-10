import React, { Component } from "react";
import SignInCard from "../components/SignInCard";
import landingimg1 from '../components/assets/images/landing2.png';
import './Landing.css';

class Landing extends Component {
    render() {
        return (
            <div className="landingpage" 
            style={{
            backgroundAttachment: "fixed",
            backgroundPosition: "left",
            backgroundRepeat: "no-repeat",
            backgroundSize: "50%",
            backgroundColor: "#edf0f5",
            paddingBottom: "500px"
            }}>
                <div className="container">
                    <div className="row" style={{paddingTop:"50px"}}>
                        <div className="col-6">
                                <div className="container title">
                                    <div className="nav-title">
                                        <p className="navTitle">ZENN Inventory</p>
                                        <p id="tagLine">"Be at one with your inventory"</p>
                                    </div>
                                </div>

                            <div className="landing-img">
                                <img src={landingimg1} alt="inventory mess" style={{ display: "block", marginLeft: "auto", marginRight: "auto", width: "90%"}} />
                            </div>

                            <p className="pTag"><i className="fas fa-sync-alt" style={{ fontSize: "36px", color: "Dodgerblue" }}></i> Sync and streamline your multichannel e-commerce business.
                                </p>
                            <p className="pTag"><i className="fas fa-store" style={{ fontSize: "36px", color: "FireBrick" }}></i> Centralize your storefront inventory.
                                </p>
                            <p className="pTag"><i className="fas fa-cash-register" style={{ fontSize: "36px", color: "LightSteelBlue" }}></i> Manage your inventory and sales order.
                                </p>
                            <p className="pTag"><i className="fas fa-money-bill-alt" style={{ fontSize: "36px", color: "LimeGreen" }}></i> Save time and money, sell everywhere, and grow your business!
                                </p>
                        </div>
                        <div className="col-md-4 offset-md-2 wrap" style={{marginTop:"100px"}}>
                            <SignInCard></SignInCard>
                        </div>
                    </div>
                </div>

                <div className="footer fixed-bottom col-12" style={{ textAlign: "center", margin: "50px 0 0 0", padding: 0, background: "white" }}>
                    <a className="links" href="https://www.zenninventory.com">© 2019 ZENN Inventory</a>
                </div>
                <section>
                    <div className="split left texture">
                        <div className="centered"></div>
                    </div>
                    <div className="split right">
                        <div className="centered"></div>
                    </div>
                </section>
            </div>
        );
    }
}
export default Landing;