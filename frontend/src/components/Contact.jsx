import React from "react";
import "../assets/styles/Contact.css";
import contact from "../assets/images/contact.jpg";

const Contact= () =>{
    return(
        <div className="contact">
            <div className="left-container">
            <div className="c-left">
                <span className="orange-text">
                    Contact
                </span>
                <span className="normal-text">
                    Easy to contact us
                </span>
                <span className="secondary-text">
                We always ready to help by providijng the best services for you. <br /> We beleive a good blace to live can make your life better
                </span>
                <div className="call-box">
                    <div className="call-title">
                        <div className="call-detail">
                            <span>Call :</span>
                            <span class="secondary-text">123 456 789</span>
                        </div>
                    </div>
                    <div className="number-box">
                        <button className="number">
                            Call now
                        </button>
                    </div>
                </div>

                <div className="msg-box">
                    <span class="msg">Message</span>
                    <div className="msg-now">
                    <button>Message now</button>
                    </div>
                    
                </div>
            </div>
            </div>
            {/* <div className="c-left">
                <span className="orange-text">
                    Contact
                </span>
                <span className="normal-text">
                    Easy to contact us
                </span>
                <span className="secondary-text">
                We always ready to help by providijng the best services for you. <br /> We beleive a good blace to live can make your life better
                </span>
                <div className="call-box">
                    <div className="call-title">
                        <div className="call-detail">
                            <span>Call :</span>
                            <span class="secondary-text">123 456 789</span>
                        </div>
                    </div>
                    <div className="number-box">
                        <button className="number">
                            Call now
                        </button>
                    </div>
                </div>

                <div className="msg-box">
                    <span class="msg">Message</span>
                    <div className="msg-now">
                    <button>Message now</button>
                    </div>
                    
                </div>
            </div> */}


            <div className="c-right">
                <div className="img-container">
                    <img src={contact} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Contact;