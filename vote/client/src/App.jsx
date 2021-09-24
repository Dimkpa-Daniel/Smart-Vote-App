import React, { useEffect } from "react";
// import Register from './components/Register';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom";
import HomePage from "./pages";
import LogIn from "./pages/LogIn";
import "./styles/custom.scss";
import "./styles/index.scss";
import axios from "axios";
import Cookies from "js-cookie";

import { UserAtom } from "./atoms/userAtom";
import { useRecoilState } from "recoil";

axios.defaults.baseURL =
	process.env.NODE_ENV === "production"
		? "https://google.com"
		: "http://localhost:8000";

const App = () => {
	const token = Cookies.get("token");
	const [user, setUser] = useRecoilState(UserAtom);

	useEffect(() => {
		const getUser = async () => {
			try {
				const { data } = await axios.get("/auth/me", {
					headers: {
						authorization: token,
					},
				});
				setUser(data);
			} catch (error) {
				console.log(error);
				Cookies.remove("token");
			}
		};
		if (token) getUser();
	}, [token]);

	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<HomePage />
				</Route>
				<Route path="/login">
					{Boolean(token) ? <Redirect to="/" /> : <LogIn />}
				</Route>
			</Switch>
		</Router>
	);
};

export default App;
