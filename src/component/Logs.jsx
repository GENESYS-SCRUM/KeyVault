import React from "react";
import "./Logs.css";
import Goggle from "./Goggle";
import Apple from "./Apple";

function Logs() {
    return(
        <>
          <div className="LoginPage">
            <div className="sqaurx">
                <div className="heading">
                    <h2>Log in</h2>
                </div>

                <form id="form-log">
                    <div class="form-control-log"> 
                    <label for="Email" id="Email-label">
                        Email
                    </label>
                    <input type="email" id="email" placeholder="Enter email" />
                    </div>

                    <div class="form-control-log"> 
                    <label>
                        Password
                    </label>
                    <input type="password" id="password" placeholder="Input password" />
                    </div>

                    <button type="submit" value="submit">
							Log in
						</button>

						<div className="logInWith">
							<div className="tinLine"></div>
							<h6>Or Log in with</h6>
							<div className="tinLine"></div>
						</div>

						<div className="Btn">
							<Goggle/>
							<Apple/>
						</div>

						<div className="bottom">
							<p>By signing up, you have agreed with our Terms and Conditions and fully agreed 
							<br/> with our privacy policy</p>
						</div>
                    
                </form>
            </div>
          </div>
        </>
    );  
}

export default Logs;