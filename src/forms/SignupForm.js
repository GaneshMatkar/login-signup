import axios from "axios";
import { useFormik } from "formik";
import { useSnackbar } from "notistack";
import React from "react";
import { TextField, FormLabel, Container } from "@mui/material";
import { FormattedButton, ErrorLabel } from "../components";
import { SignupValidationSchema } from "../ValidationSchema";
import { useNavigate  } from "react-router-dom";
import AppConfig from "../constants/config";

export const SignupForm = () => {
	const navigate = useNavigate ();
	const {enqueueSnackbar} = useSnackbar();
	const handleSubmit = async (values) => {
		try {
			await axios.post(`${AppConfig.baseUrl}/api/user`, values);
			enqueueSnackbar("User Created successfully", { variant: "success" });
			navigate("/");
		} catch (e) {
			enqueueSnackbar("Something went wrong, please try again at a later moment", { variant: "error" });
			navigate("/");
		}
	};

	const cancelClicked = () =>{
		navigate("/");
	}

	const formik = useFormik({
		initialValues: { 
			firstName: "",
			lastName: "",
			email: "", 
			mobile: "",
			password: "", 
			confirmPassword: ""
		},
		validationSchema: SignupValidationSchema,
		onSubmit: handleSubmit
	});

	return (
		<Container>
			<form onSubmit={formik.handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
				<FormLabel>First Name</FormLabel>
				<TextField
					id="firstName"
					name="firstName"
					type="text"
					onChange={formik.handleChange}
					onBlur={() => formik.setFieldTouched("firstName")}
					value={formik.values.firstName}
				/>
				<ErrorLabel text={formik.touched.firstName && formik.errors.firstName}/>
				<FormLabel>Last Name</FormLabel>
				<TextField
					id="lastName"
					name="lastName"
					type="text"
					onChange={formik.handleChange}
					onBlur={() => formik.setFieldTouched("lastName")}
					value={formik.values.lastName}
				/>
				<ErrorLabel text={formik.touched.lastName && formik.errors.lastName}/>
				<FormLabel>Email address</FormLabel>
				<TextField
					id="email"
					name="email"
					type="email"
					onChange={formik.handleChange}
					onBlur={() => formik.setFieldTouched("email")}
					value={formik.values.email}
				/>
				<ErrorLabel text={formik.touched.email && formik.errors.email}/>
				<FormLabel>Mobile Number</FormLabel>
				<TextField
					id="mobile"
					name="mobile"
					type="number"
					onChange={formik.handleChange}
					onBlur={() => formik.setFieldTouched("mobile")}
					value={formik.values.mobile}
				/>
				<ErrorLabel text={formik.touched.mobile && formik.errors.mobile}/>
				<FormLabel>Password</FormLabel>
				<TextField
					id="password"
					name="password"
					type="password"
					onChange={formik.handleChange}
					onBlur={() => formik.setFieldTouched("password")}
					value={formik.values.password}
				/>
				<ErrorLabel text={formik.touched.password && formik.errors.password}/>
				<FormLabel>Confirm Password</FormLabel>
				<TextField
					id="confirmPassword"
					name="confirmPassword"
					type="password"
					onChange={formik.handleChange}
					onBlur={() => formik.setFieldTouched("confirmPassword")}
					value={formik.values.confirmPassword}
				/>
				<ErrorLabel text={formik.touched.confirmPassword && formik.errors.confirmPassword}/>
				<div style={{display:"flex", flexDirection:'row', justifyContent:"space-between"}}>
					<FormattedButton type="submit" variant="contained" text="Sign Up"/>
					<FormattedButton variant="contained" onClick={cancelClicked} text="Cancel"/>
				</div>
			</form>
		</Container>
	);
};
