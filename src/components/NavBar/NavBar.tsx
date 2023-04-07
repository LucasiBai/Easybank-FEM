import Image from "next/image";
import Link from "next/link";
import SideMenu from "../SideMenu/SideMenu";

import styles from "./NavBar.module.css";
import GradientButton from "../GradientButton/GradientButton";
import NavLinks from "../NavLinks/NavLinks";

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
				<Link href={"/"}>
					<Image src={logo} alt={alt} width={100} height={20} />
				</Link>

				<div className={styles.desktop}>
					<NavLinks links={links} />
				</div>

				<div className={styles.desktop}>
					<GradientButton>Request Invite</GradientButton>
				</div>

				<div className={styles.navbutton}>
					<SideMenu links={links} />
				</div>
			</nav>
		</header>
	);
}

export default NavBar;
