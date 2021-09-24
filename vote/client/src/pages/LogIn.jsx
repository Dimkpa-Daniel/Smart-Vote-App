import axios from "axios";
import cookie from "js-cookie";
import React from "react";
import { GoogleLogin } from "react-google-login";
import { useRecoilValue } from "recoil";
import { UserAtom } from "../atoms/userAtom";

const LogIn = () => {
	const user = useRecoilValue(UserAtom);

	const onLoginSuccess = async (res) => {
		const { data } = await axios.post("/auth/google", res.profileObj);
		cookie.set("token", data);
		alert("Login Successful !!");
	};

	const onFailureSuccess = (res) => {
		console.log("Login Failed:", res);
	};

	return (
		<div className="login container ">
			<GoogleLogin
				clientId={process.env.REACT_APP_GOOGLE_CLIENT}
				buttonText="LogIn with Google"
				onSuccess={onLoginSuccess}
				onFailure={onFailureSuccess}
				cookiePolicy={"single_host_origin"}
				disabled={Boolean(user)}
			/>
		</div>
	);
};

export default LogIn;
