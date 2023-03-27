import Image from "next/image";
import styles from "./page.module.css";

import mobilePic from "../../public/image-mockups.png";
import backgroundMobile from "../../public/bg-intro-mobile.svg";
import GradientButton from "@component/components/GradientButton/GradientButton";
import IconArticle from "@component/components/IconArticle/IconArticle";

const articleData: { icon: string; header: string; content: string }[] = [
	{
		icon: "/icon-online.svg",
		header: "Online Banking",
		content:
			"We leverage Open Banking to turn yout bank account into your financial hub. Control your finances like never before.",
	},
	{
		icon: "/icon-budgeting.svg",
		header: "Simple Budgeting",
		content:
			"We leverage Open Banking to turn yout bank account into your financial hub. Control your finances like never before.",
	},
	{
		icon: "/icon-onboarding.svg",
		header: "Fast Onboarding",
		content:
			"We leverage Open Banking to turn yout bank account into your financial hub. Control your finances like never before.",
	},
	{
		icon: "/icon-api.svg",
		header: "Open API",
		content:
			"We leverage Open Banking to turn yout bank account into your financial hub. Control your finances like never before.",
	},
];

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

			<section className={styles["sub-section"]}>
				<article>
					<h3>Why choose Easybank?</h3>
					<p>
						We leverage Open Banking to turn yout bank account into your
						financial hub. Control your finances like never before.
					</p>
				</article>

				<section>
					{articleData.map((article, idx) => (
						<IconArticle key={idx} header={article.header} icon={article.icon}>
							{article.content}
						</IconArticle>
					))}
				</section>
			</section>
		</main>
	);
}
