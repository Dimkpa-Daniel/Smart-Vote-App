import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";
import "./styles/index.scss";
import "./styles/custom.scss";
import App from "./App";

ReactDOM.render(
	<React.StrictMode>
		<RecoilRoot>
			<App />
		</RecoilRoot>
	</React.StrictMode>,
	document.getElementById("root"),
);
