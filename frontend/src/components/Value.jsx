import React from "react";
import "../assets/styles/Value.css";
import value from "../assets/images/value.png";
import down from "../assets/images/down.png";
import secure from "../assets/images/secure.png";

const Value = () =>{
    return(
        <div className="value">
            <div className="left-side">
                <div className="img-container">
                    <img src={value} alt="property" />
                </div>
            </div>

            <div className="right-side">
                <span className="orange-text">Our Value</span>
                <span className="normal-text">Value We Give to You</span>
                <span className="secondary-text">We always ready to help by providijng the best services for you.
                    <br />
                    We beleive a good blace to live can make your life better
                </span>

                <div className="data-container">
                    <div className="data">
                        <div className="title-container">
                            <div class="secure">
                                <img src={secure} alt="" />
                            </div>
                             <span className="title">Best interest rates on the market</span>
                            <div className="icon">
                                <img src={down} alt="" />
                            </div>
                        </div>
                        <div className="body">
                           <p class="description">
                           Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.
                           </p>
                        </div>
                    </div>

                    <div className="data">
                        <div className="title-container">
                            <div class="secure">
                                <img src={secure} alt="" />
                            </div>
                             <span className="title">Best price on the market</span>
                            <div className="icon">
                                <img src={down} alt="" />
                            </div>
                        </div>
                        <div className="body">
                           <p class="description">
                           Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.
                           </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Value;