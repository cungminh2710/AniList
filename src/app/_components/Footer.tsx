import { AbsoluteCenter, Box, Text } from '@chakra-ui/react';

export const Footer = () => {
	return (
		<footer>
			<Box position='relative' h='100px'>
				<AbsoluteCenter>
					<Text>v3.5</Text>
				</AbsoluteCenter>
			</Box>
		</footer>
	);
};
