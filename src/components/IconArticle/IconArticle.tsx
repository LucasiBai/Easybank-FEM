import style from "./IconArticle.module.css";

function IconArticle({
	icon,
	header,
	children,
}: {
	icon: string;
	header: string;
	children?: string;
}) {
	return (
		<article className={style["icon-article"]}>
			<h4>{header}</h4>
			<p>{children}</p>
		</article>
	);
}

export default IconArticle;
