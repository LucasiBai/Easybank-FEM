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
			<div>
				<Image src={thumbnail} alt={header} objectFit={"cover"} fill={true} />
			</div>
			<span>
				<h5>By {author}</h5>
				<h4>{header}</h4>
				<p className={styles["card-paragraph"]}>{content}</p>
			</span>
		</article>
	);
}

export default CardArticle;
