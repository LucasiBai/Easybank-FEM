import Image from "next/image";

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
			<Image src={icon} alt={header} width={72} height={72} />
			<h4>{header}</h4>
			<p>{children}</p>
		</article>
	);
}

export default IconArticle;
