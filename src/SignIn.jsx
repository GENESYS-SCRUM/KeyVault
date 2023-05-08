import React from "react";
import "./SignIn.css";
// import Nav from "./component/Nav";
import encrypt from "../src/images/encrypt.png";
import SignUp from "./component/SignUpButton";
import Login from "./component/Login";

function SignIn() {
	return (
		<>
			{/* <Nav /> */}
			<div className="welcomePage">
				<div className="sqaure">
					<div className="sqaureContext">
						<img src={encrypt} alt="" className="encrypt" />
						<h2>Welcome to KeyVault</h2>
						<p>
							Safeguard and manage all your passwords in <br />
							one place and easily use across multi- <br /> platforms, backed by our
							cutting edge <br /> security at your service
						</p>
						<div className="SignInBtn">
							<SignUp />	
							<Login />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default SignIn;
