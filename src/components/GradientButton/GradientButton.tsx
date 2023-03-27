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
		<button className={style["gradient-button"]} onClick={onClick}>
			{children}
		</button>
	);
}

export default GradientButton;
