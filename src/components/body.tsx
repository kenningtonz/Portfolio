"use client";
// import { fredoka } from "@/lib/fonts";
import { Fredoka } from "next/font/google";
import { useTheme } from "@/lib/classes/theme";
import localFont from "next/font/local";

const fredoka = localFont({
	variable: "--font-fredoka",
	src: [
		{
			path: "../lib/fonts/Fredoka-Light.ttf",
			weight: "300",
			style: "normal",
		},
		{
			path: "../lib/fonts/Fredoka-Regular.ttf",
			weight: "400",
			style: "normal",
		},
		{
			path: "../lib/fonts/Fredoka-Medium.ttf",
			weight: "500",
			style: "normal",
		},
		{
			path: "../lib/fonts/Fredoka-SemiBold.ttf",
			weight: "600",
			style: "normal",
		},
		{
			path: "../lib/fonts/Fredoka-Bold.ttf",
			weight: "700",
			style: "normal",
		},
	],
});

export default function Body({ children }: { children: React.ReactNode }) {
	const { theme } = useTheme();
	return (
		// <MotionConfig reducedMotion="user">
		<body
			className={`${fredoka.className} antialiased ${theme} min-h-screen scrollbar bg-brown `}
		>
			{children}
		</body>
		// </MotionConfig>
	);
}
