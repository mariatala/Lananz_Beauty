// These styles apply to every route in the application
import './globals.css';
import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';



export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="min-h-screen flex flex-col bg-gray-100 text-gray-900  tracking-wide">
				<Header />

				{/* Main content area */}
				<main className="flex-1">{children}</main>

				<Footer />
			</body>
		</html>
	);
}
