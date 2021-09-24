import React from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import logo from "../assets/techcreek logo.png";
import { UserAtom } from "../atoms/userAtom";
import styled from "styled-components";


const HeaderComp = () => {
	const user = useRecoilValue(UserAtom);
	
	return (
		<Wrapper>
			<nav class="navbar navbar-light bg-light">
				<Link to="/" class="navbar-brand image1" href="index.html">
					<img
						src={logo}
						alt=""
						width="70"
						height="60"
						class="d-inline-block align-text-top"
					/>
					<p>Smart-Vote</p>
				</Link>

				{user && (
					<ul className="nav">
						<li className="nav-item">
							<a href="/"><img src={user?.image} alt="" />{" "}</a>
						</li>
					</ul>
				)}
			</nav>
		</Wrapper>
	);
};

export default HeaderComp;

const Wrapper = styled.header`
	.nav {
		img {
			width: 3rem;
			height: 3rem;
			border-radius: 50%;
		}
	}
`;
