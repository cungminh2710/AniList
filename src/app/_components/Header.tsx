import { ColorModeButton } from '@/components/ui/color-mode';
import { Button, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';

export const Header = ({ heading }: { heading: string }) => {
	return (
		<Flex as='header' p={4} justifyContent='center' padding={4} gap={4}>
			<Button p={2} asChild>
				<Link href='/'>Home</Link>
			</Button>
			<Text textStyle='3xl'>{heading}</Text>
			<Button p={2} asChild>
				<Link href='/profile'>Profile</Link>
			</Button>
			<ColorModeButton/>
		</Flex>
	);
};
