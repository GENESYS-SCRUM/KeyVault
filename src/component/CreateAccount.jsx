import React from "react";
import "./CreateAccount.css";
import Goggle from "./Goggle";
import Apple from "./Apple";
import { useNavigate } from "react-router";
import { useState } from "react";
// import Nav from "./Nav";
// import Sqare from "./Sqare";

function CreateAccount() {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [error, setError] = useState("");

	const handleSubmit = () => {
		if (password !== confirmPassword) {
			setError("Password do not match!!!");
			return;
		}
		if (email) {
			navigate("/savedkeys");
		}
	};
	return (
		<>
			<div className="accountPage">
				<div className="sqaure">
					<div className="heading">
						<h2>Create Account</h2>
					</div>
					{/* <!-- Create Form --> */}
					<form id="form" onSubmit={handleSubmit}>
						{/* <!-- Details --> */}
						<div class="form-control">
							<label for=" Full Name" id="label-name">
								Name
							</label>

							{/* <!-- Input Type Text --> */}
							<input type="text" id="name" placeholder="Enter full name" />
						</div>

						<div class="form-control">
							<label for="email" id="label-email">
								Email
							</label>

							{/* <!-- Input Type Email--> */}
							<input
								type="email"
								id="email"
								placeholder="Enter email"
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>

						<div class="form-control">
							<label for="password" id="password">
								Password
							</label>

							{/* <!-- Input Type Email--> */}
							<input type="password" id="password" placeholder="Input password"
							onChange={(e) => {
								setError('')
								setPassword(e.target.value)} 
							}
							/>
						</div>

						<div class="form-control">
							<label for="password-confirm" id="password-confirm">
								Confirm Password
							</label>

							{/* <!-- Input Type Email--> */}
							<input
								type="password"
								id="password-confirm"
								placeholder="Input password again"
								onChange={(e) => {
									setError('')
									setConfirmPassword(e.target.value)} 
								}
							/>
						</div>

						{/* <!-- Multi-line Text Input Control --> */}
						<button type="submit" value="submit">
							Sign up
						</button>

						<div className="signUpWith">
							<div className="tinLine"></div>
							<h6>Or Sign up with</h6>
							<div className="tinLine"></div>
						</div>

						<div className="Btn">
							<Goggle />
							<Apple />
						</div>

						<div className="bottom">
							<p>
								By signing up, you have agreed with our Terms and Conditions and
								fully agreed
								<br /> with our privacy policy
							</p>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}

export default CreateAccount;
