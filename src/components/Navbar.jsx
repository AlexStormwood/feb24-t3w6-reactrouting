import { Link } from "react-router-dom";

export default function Navbar () {
	return(
		<nav>
			
			<Link to={"/"}>
				<h1>Example Navbar Title</h1>
			</Link>

			<Link to={"/about"}>
				<h3>About</h3>
			</Link>
			<Link to={"/contact"}>
				<h3>Contact</h3>
			</Link>
		</nav>
	);
}