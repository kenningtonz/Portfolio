"use client";
// import { fredoka } from "@/lib/fonts";
import { Fredoka } from "next/font/google";
import { useTheme } from "@/lib/classes/theme";

const fredoka = Fredoka({
	weight: ["300", "400", "500", "600", "700"],
	style: "normal",
	subsets: ["latin"],
});

export default function Body({ children }: { children: React.ReactNode }) {
	const { theme } = useTheme();
	return (
		// <MotionConfig reducedMotion="user">
		<body className={`${fredoka.className} antialiased ${theme} min-h-screen`}>
			{children}
		</body>
		// </MotionConfig>
	);
}
