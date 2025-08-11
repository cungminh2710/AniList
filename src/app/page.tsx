import { Button, Center, Text } from '@chakra-ui/react';
import { Header } from './_components/Header';
import Link from 'next/link';

export default function Home() {
	return (
		<>
			<Center m={4}>
				<Header heading='Home Page' />
			</Center>
			<Center>
				<Text>Welcome</Text>
				<Button p={2} m={3} asChild>
					<Link href='/character'>Go to Character List</Link>
				</Button>
			</Center>
		</>
	);
}
