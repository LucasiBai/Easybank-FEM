"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import styles from "./SideMenu.module.css";

function SideMenu({ links }: { links: { path: string; label: string }[] }) {
	const [open, setOpen] = useState(false);

	const handleOnSwitch = () => {
		setOpen((prev) => !prev);
	};

	return (
		<div className={styles.sidemenu}>
			<button onClick={handleOnSwitch}>
				<Image
					src="/icon-hamburger.svg"
					alt="nav-button"
					width={24}
					height={20}
				/>
			</button>

			{open ? (
				<>
					<span>
						<ul>
							{links.map(
								(link: { path: string; label: string }, idx: number) => (
									<li key={idx} onClick={handleOnSwitch}>
										<Link href={link.path}>{link.label}</Link>
									</li>
								),
							)}
						</ul>
					</span>

					<div className={styles.background} onClick={handleOnSwitch} />
				</>
			) : (
				<></>
			)}
		</div>
	);
}

export default SideMenu;
