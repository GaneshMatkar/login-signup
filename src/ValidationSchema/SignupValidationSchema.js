import { object, string } from "yup";

export const SignupValidationSchema = object().shape({
    firstName:string().required("First name is required"),
	email: string().email("Invalid email entered").required("Email is required"),
	mobile: string().min(10, "Invalid mobile number entered").max(10, "Invalid mobile number entered").required("Mobile number is required"),
	password: string().min(8, "Must contain at least 8 characters."),
	confirmPassword: string().test({
		test(value) {
			const { parent, createError } = this;

			if (parent.password !== value) {
				return createError({ message: "Passwords do not match." });
			}

			return true;
		}
	}),
});
