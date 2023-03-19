import Image from "next/image";
import SideMenu from "../SideMenu/SideMenu";

import styles from "./NavBar.module.css";

const links: { path: string; label: string }[] = [
	{
		path: "/",
		label: "Home",
	},
	{
		path: "/about",
		label: "About",
	},
	{
		path: "/contact",
		label: "Contact",
	},
	{
		path: "/blog",
		label: "Blog",
	},
	{
		path: "/careers",
		label: "Careers",
	},
];

function NavBar({ logo, alt }: { logo: string; alt: string }) {
	return (
		<header className={styles["nav-bar"]}>
			<nav>
				<Image src={logo} alt={alt} width={"100"} height={"20"} />
				<SideMenu links={links} />
			</nav>
		</header>
	);
}

export default NavBar;
