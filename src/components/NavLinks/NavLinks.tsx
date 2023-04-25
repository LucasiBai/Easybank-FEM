import Link from "next/link";
import styles from "./NavLinks.module.css";

function NavLinks({ links }: { links: { path: string; label: string }[] }) {
	return (
		<ul className={styles.navlinks}>
			{links.map((link: { path: string; label: string }, idx) => (
				<li key={idx}>
					<Link href={link.path}>{link.label}</Link>
					<hr />
				</li>
			))}
		</ul>
	);
}

export default NavLinks;
