import { object, string } from "yup";

export const LoginValidationSchema = object().shape({
	email: string().email("Invalid email entered").required("Email is required"),
	password: string().required('Password is required.') 
});
