import Image from "next/image";
import styles from "./page.module.css";

import mobilePic from "../../public/image-mockups.png";
import backgroundMobile from "../../public/bg-intro-mobile.svg";
import backgroundDesktop from "../../public/bg-intro-desktop.svg";
import GradientButton from "@component/components/GradientButton/GradientButton";
import IconArticle from "@component/components/IconArticle/IconArticle";
import CardList from "@component/components/CardList/CardList";

const articleData: { icon: string; header: string; content: string }[] = [
	{
		icon: "/icon-online.svg",
		header: "Online Banking",
		content:
			"Our moderm web and mobile applications allow you to keep track of your finances wherever you are in the world.",
	},
	{
		icon: "/icon-budgeting.svg",
		header: "Simple Budgeting",
		content:
			"See exactly where your money goes each month. Receive notifications when you're close to your hitting limits.",
	},
	{
		icon: "/icon-onboarding.svg",
		header: "Fast Onboarding",
		content:
			"We don't do branches. Open your account in minutes online and start taking control of your finances right away.",
	},
	{
		icon: "/icon-api.svg",
		header: "Open API",
		content:
			"Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
	},
];

const lastArticles: {
	author: string;
	header: string;
	content: string;
	thumbnail: string;
}[] = [
	{
		author: "Claire Robinson",
		header: "Receive money in any currency with no fees",
		content:
			"The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single...",
		thumbnail: "/image-currency.jpg",
	},
	{
		author: "Wilson Hutton",
		header: "Treat yourself without worrying about money",
		content:
			"Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you...",
		thumbnail: "/image-restaurant.jpg",
	},
	{
		author: "Wilson Hutton",
		header: "Take your Easybank card wherever you go",
		content:
			"We want to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you...",
		thumbnail: "/image-plane.jpg",
	},
	{
		author: "Claire Robinson",
		header: "Our invite-only Beta accounts are now live!",
		content:
			"After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site...",
		thumbnail: "/image-confetti.jpg",
	},
];

export default function Home() {
	return (
		<main className={styles["main-home"]}>
			<section>
				<article className={styles["main-article"]}>
					<div className={styles["image-container"]}>
						<div className={styles.mobile}>
							<Image
								src={backgroundMobile}
								alt="easybank-background"
								objectFit="cover"
								objectPosition="center"
								layout="fill"
							/>
						</div>

						<div className={styles.desktop}>
							<Image
								src={backgroundDesktop}
								alt="easybank-background"
								objectFit="cover"
								objectPosition="-50px -208px"
								layout="fill"
							/>
						</div>

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
					<article style={{ paddingBottom: 0 }}>
						<h2>Next generation digital banking</h2>
						<p>
							Take your financial life online. Your Easybank account will be a
							one-stop-shop for spending, saving, budgeting, investing, and much
							more
						</p>
						<GradientButton>Request Invite</GradientButton>
					</article>
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

			<section className={styles["last-articles"]}>
				<h3>Lastest Articles</h3>
				<CardList cardsData={lastArticles} />
			</section>
		</main>
	);
}
