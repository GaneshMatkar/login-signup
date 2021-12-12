import {CssBaseline} from "@mui/material";
import React, { useEffect } from "react";
import { SignupForm } from "../../forms";
import "./Signup.css";

export const Signup = () => {
	useEffect(() =>{
		localStorage.clear();
		sessionStorage.clear();
	}, []);

	return (
		<div className="signupBackground">
			<CssBaseline />
			<div className="wrapper">
				<div className="signup">
					<SignupForm />
				</div>
			</div>
		</div>
	);
};
