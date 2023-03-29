import Image from "next/image";

import styles from "./CardArticle.module.css";

function CardArticle({
	header,
	content,
	author,
	thumbnail,
}: {
	author: string;
	header: string;
	content: string;
	thumbnail: string;
}) {
	return (
		<article className={styles["card-article"]}>
			<Image
				src={thumbnail}
				alt={header}
				width={60}
				height={40}
				objectFit={"cover"}
			/>
			<h5>{author}</h5>
			<h4>{header}</h4>
			<p>{content}</p>
		</article>
	);
}

export default CardArticle;
