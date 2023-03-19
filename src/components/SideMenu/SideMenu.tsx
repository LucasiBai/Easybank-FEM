import { link } from "fs";
import Image from "next/image";
import Link from "next/link";

function SideMenu({ links }: { links: { path: string; label: string }[] }) {
	return (
		<div>
			<button>
				<Image
					src="/icon-hamburger.svg"
					alt="nav-button"
					width={20}
					height={20}
				/>
			</button>

			{links.map((link: { path: string; label: string }, idx: number) => (
				<Link href={link.path} key={idx}>
					{link.label}
				</Link>
			))}
		</div>
	);
}

export default SideMenu;
