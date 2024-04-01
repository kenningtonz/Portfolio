import type { Metadata } from "next";

import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";

import Body from "@/components/body";

import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

export const metadata: Metadata = {
	title: "Kennedy Adams",
	description: "Portfolio of Kennedy Adams",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' className='font-sans scroll-p-16'>
			<link rel='icon' href='/favicon.ico' />

			<Body children={children} />
		</html>
	);
}
