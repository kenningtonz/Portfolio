import Header from "@/components/header";
import Footer from "@/components/footer";
import "../globals.css";

export default function ProjectPageLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<Header isAnimated={false} />
			{children}
			<Footer />
		</>
	);
}
