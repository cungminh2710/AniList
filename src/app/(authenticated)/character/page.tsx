import { Header } from '@/app/_components/Header';
import { Center } from '@chakra-ui/react';
import { CharacterListPage } from './_components/CharacterListPage';

export default async function ListPageRSC({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
	let page = (await searchParams).page;
	if (!page || isNaN(Number(page))) {
		page = '1';
	}

	return (
		<>
			<Center m={4}>
				<Header heading='Character List' />
			</Center>
			<CharacterListPage page={+page} />
		</>
	);
}
