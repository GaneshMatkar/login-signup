import axios from "axios";
import { useFormik } from "formik";
import { useSnackbar } from "notistack";
import React, {useState} from "react";
import { TextField, FormLabel, Link, Container, Checkbox, FormControlLabel } from "@mui/material";
import { FormattedButton, ErrorLabel } from "../components";
import { LoginValidationSchema } from "../ValidationSchema";
import AppConfig from "../constants/config";

export const LoginForm = () => {
	const {enqueueSnackbar} = useSnackbar();
	const [showPass, setShowPass] = useState(false);
	const handleSubmit = async (values) => {
		try {
			const {data} = await axios.post(`${AppConfig.baseUrl}/api/user/login`, values);
			localStorage.setItem("token", data.token)
			enqueueSnackbar("User logged in successfully", { variant: "success" });
		} catch (e) {
			enqueueSnackbar("Something went wrong, please try again at a later moment", { variant: "error" });
		}
	};

	const formik = useFormik({
		initialValues: { email: "", password: "" },
		validationSchema: LoginValidationSchema,
		onSubmit: handleSubmit
	});

	return (
		<Container>
			<form onSubmit={formik.handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
				<br />
				<FormLabel>Email address</FormLabel>
				<TextField
					id="email"
					name="email"
					type="text"
					onChange={formik.handleChange}
					onBlur={() => formik.setFieldTouched("email")}
					value={formik.values.email}
				/>
				<ErrorLabel text={formik.touched.email && formik.errors.email}/>
				<br />
				<FormLabel>Password</FormLabel>
				<TextField
					id="password"
					name="password"
					type={ showPass ? "text" :"password"}
					onChange={formik.handleChange}
					onBlur={() => formik.setFieldTouched("password")}
					value={formik.values.password}
				/>
				<ErrorLabel text={formik.touched.password && formik.errors.password}/>
				<FormControlLabel control={<Checkbox checked={showPass} onChange={() => setShowPass(!showPass)}/>} label="Show Password" />
				<br />
				<FormattedButton type="submit" variant="contained" text="Login"/>
				<br />
				<div>
					Dont have an account ? <Link href="/signup">Sign Up</Link>
				</div>
			</form>
		</Container>
	);
};
