"use client";

import { MouseEventHandler } from "react";
import style from "./GradientButton.module.css";

function GradientButton({
	children,
	onClick,
}: {
	children: string;
	onClick?: MouseEventHandler<HTMLButtonElement>;
}) {
	return (
		<span className={style["gradient-button"]}>
			<button onClick={onClick}>{children}</button>
		</span>
	);
}

export default GradientButton;
