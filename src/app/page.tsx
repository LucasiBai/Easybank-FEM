import Image from "next/image";
import styles from "./page.module.css";

import mobilePic from "../../public/image-mockups.png";
import backgroundMobile from "../../public/bg-intro-mobile.svg";
import GradientButton from "@component/components/GradientButton/GradientButton";

export default function Home() {
	return (
		<main className={styles["main-home"]}>
			<section>
				<article>
					<div className={styles["image-container"]}>
						<Image
							src={backgroundMobile}
							alt="mockups"
							objectFit="cover"
							objectPosition="center"
							layout="fill"
						/>
						<span>
							<Image
								src={mobilePic}
								alt="mockups"
								objectFit="cover"
								objectPosition="bottom center"
								layout="fill"
							/>
						</span>
					</div>
					<h2>Next generation digital banking</h2>
					<p>
						Take your financial life online. Your Easybank account will be a
						one-stop-shop for spending, saving, budgeting, investing, and much
						more
					</p>
					<GradientButton>Request Invite</GradientButton>
				</article>
			</section>
		</main>
	);
}
