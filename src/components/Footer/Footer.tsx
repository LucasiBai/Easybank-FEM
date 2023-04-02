import Image from "next/image";
import styles from "./Footer.module.css";
import GradientButton from "../GradientButton/GradientButton";

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
			<Image src={logo} alt={alt} width={100} height={20} />

			<div className={styles.media}>
				<ul>
					{socialMedia.map((media, idx) => (
						<li key={idx}>
							<a href={media.href}>
								<Image
									src={media.icon}
									alt={media.media}
									width={20}
									height={20}
								/>
							</a>
						</li>
					))}
				</ul>
			</div>

			<div className={styles.links}></div>

			<GradientButton>Request Invite</GradientButton>
		</footer>
	);
}

export default Footer;
