import Image from "next/image";
import styles from "./Footer.module.css";
import GradientButton from "../GradientButton/GradientButton";
import Link from "next/link";

function Footer({
	logo,
	alt,
	socialMedia,
	links,
}: {
	logo: string;
	alt: string;
	socialMedia: { href: string; icon: string; media: string }[];
	links: { path: string; label: string }[];
}) {
	return (
		<footer className={styles.footer}>
			<span>
				<div>
					<Link href={"/"}>
						<Image src={logo} alt={alt} width={100} height={20} />
					</Link>

					<ul className={styles.media}>
						{socialMedia.map((media, idx) => (
							<li key={idx}>
								<Link href={media.href} target="_blank">
									<Image
										src={media.icon}
										alt={media.media}
										width={24}
										height={24}
									/>
								</Link>
							</li>
						))}
					</ul>
				</div>

				<ul className={styles.links}>
					{links.map((link, idx) => (
						<li key={idx}>
							<Link href={link.path}>{link.label}</Link>
						</li>
					))}
				</ul>

				<div>
					<GradientButton>Request Invite</GradientButton>
					<h6>© Easybank. All Rights Reserved</h6>
				</div>
			</span>
		</footer>
	);
}

export default Footer;
