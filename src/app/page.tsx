import Image from "next/image";
import styles from "./page.module.css";

import mobilePic from "../../public/image-mockups.png";

export default function Home() {
	return (
		<main className={styles["main-home"]}>
			<span>
				<Image
					src={mobilePic}
					alt="mockups"
					objectFit="contain"
					layout="fill"
				/>
			</span>
		</main>
	);
}
