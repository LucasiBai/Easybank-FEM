"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import styles from "./SideMenu.module.css";

function SideMenu({ links }: { links: { path: string; label: string }[] }) {
	const [open, setOpen] = useState(false);

	const handleOnClickBurger = () => {
		setOpen((prev) => !prev);
	};

	return (
		<div className={styles.sidemenu}>
			<button onClick={handleOnClickBurger}>
				<Image
					src="/icon-hamburger.svg"
					alt="nav-button"
					width={24}
					height={20}
				/>
			</button>

			{open ? (
				<ul>
					{links.map((link: { path: string; label: string }, idx: number) => (
						<li key={idx}>
							<Link href={link.path}>{link.label}</Link>
						</li>
					))}
				</ul>
			) : (
				<></>
			)}
		</div>
	);
}

export default SideMenu;
