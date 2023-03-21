import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
	return (
		<main className={styles["main-home"]}>
			<Image src="/image-mockups.png" alt="mockups" width={375} height={100} />
		</main>
	);
}
