import React from "react";
// import Displaychart from "../components/Displaychart";
import Firstbody from "../components/Firstbody";
import Footer from "../components/Footer";
import HeaderComp from "../components/HeaderComp";
import Secondbody from "../components/Secondbody";
// import VotingSection from "../components/VotingSection";
import Thirdbody from "../components/Thirdbody";

const HomePage = () => {
	return (
		<div className="homepage">
			<HeaderComp />
			<Firstbody />
			<Secondbody />
			<Thirdbody />
			{/* <VotingSection /> */}
			{/* <Displaychart /> */}
			<Footer />
		</div>
	);
};

export default HomePage;
