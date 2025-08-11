import { Provider } from '@/components/ui/provider';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Footer } from './_components/Footer';
import './globals.css';
import { Container } from '@chakra-ui/react';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Rick and Morty',
	description: 'Rick and Morty',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				<Provider>
					<Container m={'auto'} asChild>
						<main>{children}</main>
					</Container>
					<Footer />
				</Provider>
			</body>
		</html>
	);
}
