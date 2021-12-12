import {CssBaseline} from "@mui/material";
import React, { useEffect } from "react";
import { LoginForm } from "../../forms";
import "./Login.css";

export const Login = () => {
	useEffect(() =>{
		localStorage.clear();
		sessionStorage.clear();
	}, []);

	return (
		<div className="background">
			<CssBaseline />
			<div className="wrapper">
				<div className="login">
					<LoginForm />
				</div>
			</div>
		</div>
	);
};
