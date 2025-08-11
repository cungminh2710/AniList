import { Header } from '@/app/_components/Header';
import { ProfilePage } from './_components/ProfilePage';
import { Center } from '@chakra-ui/react';

export default async function ProfilePageRSC() {
	return (
		<>
			<Center m={4}>
				<Header heading='Profile' />
			</Center>
			<ProfilePage />
		</>
	);
}
