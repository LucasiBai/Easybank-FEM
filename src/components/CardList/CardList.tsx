import CardArticle from "../CardArticle/CardArticle";
import styles from "./CardList.module.css";

function CardList({
	cardsData,
}: {
	cardsData: {
		author: string;
		header: string;
		content: string;
		thumbnail: string;
	}[];
}) {
	return (
		<section className={styles.cardlist}>
			{cardsData.map((card, idx) => (
				<CardArticle
					key={idx}
					header={card.header}
					content={card.content}
					author={card.author}
					thumbnail={card.thumbnail}
				/>
			))}
		</section>
	);
}

export default CardList;
