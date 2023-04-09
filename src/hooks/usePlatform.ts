"use client";
import { useEffect, useState } from "react";

export default function usePlatform(platform: string): boolean {
	const [isPlatform, setIsPlatform] = useState<boolean>(false);

	useEffect(() => {
		const windowWidth = window.innerWidth;

		setIsPlatform(
			(platform === "mobile" && windowWidth <= 576) ||
				(platform === "desktop" && windowWidth > 576),
		);
	}, [platform]);

	return isPlatform;
}
